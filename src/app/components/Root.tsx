import { Outlet, useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Home, Maximize, Minimize, FileDown, Image, Share2, X } from "lucide-react";
import jsPDF from "jspdf";
import * as htmlToImage from 'html-to-image';

const slides = [
  { path: "/", name: "Title" },
  { path: "/problem", name: "Problem" },
  { path: "/health-equity", name: "Health Equity" },
  { path: "/solution", name: "Solution" },
  { path: "/differentiator", name: "Why Different" },
  { path: "/regulatory", name: "Regulatory" },
  { path: "/market", name: "Market" },
  { path: "/competitive", name: "Competitive" },
  { path: "/business-model", name: "Business Model" },
  { path: "/team", name: "Team" },
  { path: "/ask", name: "The Ask" },
];

export default function Root() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportType, setExportType] = useState<'pdf' | 'png'>('pdf');
  const [showDeployModal, setShowDeployModal] = useState(false);

  const currentIndex = slides.findIndex(s => s.path === location.pathname);
  const slideNumber = currentIndex + 1;
  const totalSlides = slides.length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentIndex < slides.length - 1) {
        navigate(slides[currentIndex + 1].path);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        navigate(slides[currentIndex - 1].path);
      } else if (e.key === "Home") {
        navigate(slides[0].path);
      } else if (e.key === "End") {
        navigate(slides[slides.length - 1].path);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape" && isExporting) {
        // Cancel export on ESC key
        setIsExporting(false);
        setExportProgress(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, navigate, isExporting]);

  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
      navigate(slides[currentIndex + 1].path);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      navigate(slides[currentIndex - 1].path);
    }
  };

  const goToHome = () => {
    navigate(slides[0].path);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const exportPDF = async () => {
    setIsExporting(true);
    setExportType('pdf');
    setExportProgress(0);
    
    // 11x8.5 inches at 72 DPI (standard PDF resolution)
    const pageWidth = 11 * 72; // 792 px
    const pageHeight = 8.5 * 72; // 612 px
    
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [pageWidth, pageHeight],
    });

    const currentSlide = location.pathname;
    
    try {
      for (let i = 0; i < slides.length; i++) {
        // Navigate to each slide
        navigate(slides[i].path);
        
        // Wait for navigation and rendering
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Update progress BEFORE hiding UI elements
        setExportProgress(((i + 1) / slides.length) * 100);
        
        // Wait for progress update to render
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Get the slide element - use the main container
        const slideElement = document.querySelector(".slide-container") as HTMLElement;
        if (slideElement) {
          // Hide ALL UI elements including modal, navigation, shortcuts
          const uiElements = document.querySelectorAll('.fixed');
          uiElements.forEach(el => (el as HTMLElement).style.visibility = 'hidden');
          
          // Get the actual content inside the slide
          const slideContent = slideElement.children[0] as HTMLElement;
          
          // Temporarily allow overflow and get actual content dimensions
          const originalOverflow = slideElement.style.overflow;
          slideElement.style.overflow = 'visible';
          
          // Get the actual height of the content (including any overflow)
          const actualHeight = Math.max(1080, slideContent.scrollHeight);
          
          // Wait for layout to settle
          await new Promise(resolve => setTimeout(resolve, 200));
          
          // Capture at actual content dimensions
          const dataUrl = await htmlToImage.toPng(slideElement, {
            quality: 1.0,
            pixelRatio: 2,
            width: 1920,
            height: actualHeight,
            backgroundColor: '#FFFFFF',
            skipAutoScale: true,
            cacheBust: true,
            style: {
              margin: '0',
              padding: '0',
              overflow: 'visible',
            }
          });
          
          // Restore overflow
          slideElement.style.overflow = originalOverflow;
          
          // Restore UI elements
          uiElements.forEach(el => (el as HTMLElement).style.visibility = 'visible');
          
          if (i > 0) {
            pdf.addPage([pageWidth, pageHeight], "landscape");
          }
          
          // Calculate scaling to fit 11x8.5 while maintaining aspect ratio
          const scale = Math.min(pageWidth / 1920, pageHeight / actualHeight);
          const scaledWidth = 1920 * scale;
          const scaledHeight = actualHeight * scale;
          
          // Center the image on the page
          const x = (pageWidth - scaledWidth) / 2;
          const y = (pageHeight - scaledHeight) / 2;
          
          pdf.addImage(dataUrl, "PNG", x, y, scaledWidth, scaledHeight);
        }
      }
      
      // Save the PDF
      pdf.save("HealthGuardHQ-Pitch-Deck-Letter.pdf");
      
      // Return to original slide
      await new Promise(resolve => setTimeout(resolve, 500));
      navigate(currentSlide);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF: " + (error as Error).message);
      navigate(currentSlide);
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  const exportPNGs = async () => {
    setIsExporting(true);
    setExportType('png');
    setExportProgress(0);

    // 11x8.5 inches at 300 DPI for print quality
    const printWidth = 11 * 300; // 3300 px
    const printHeight = 8.5 * 300; // 2550 px

    const currentSlide = location.pathname;
    
    try {
      for (let i = 0; i < slides.length; i++) {
        // Navigate to each slide
        navigate(slides[i].path);
        
        // Wait for navigation and rendering (longer for animations)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Update progress BEFORE hiding UI elements
        setExportProgress(((i + 1) / slides.length) * 100);
        
        // Wait for progress update to render
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Get the slide element
        const slideElement = document.querySelector(".slide-container") as HTMLElement;
        if (slideElement) {
          // Hide ALL UI elements
          const uiElements = document.querySelectorAll('.fixed');
          uiElements.forEach(el => (el as HTMLElement).style.visibility = 'hidden');
          
          // Get the actual content inside the slide
          const slideContent = slideElement.children[0] as HTMLElement;
          
          // Temporarily allow overflow and get actual content dimensions
          const originalOverflow = slideElement.style.overflow;
          slideElement.style.overflow = 'visible';
          
          // Get the actual height of the content (including any overflow)
          const actualHeight = Math.max(1080, slideContent.scrollHeight);
          
          // Wait for layout to settle
          await new Promise(resolve => setTimeout(resolve, 300));
          
          // Capture at actual content dimensions
          const originalDataUrl = await htmlToImage.toPng(slideElement, {
            quality: 1.0,
            pixelRatio: 2,
            width: 1920,
            height: actualHeight,
            backgroundColor: '#FFFFFF',
            skipAutoScale: true,
            cacheBust: true,
            style: {
              margin: '0',
              padding: '0',
              overflow: 'visible',
            }
          });
          
          // Restore overflow
          slideElement.style.overflow = originalOverflow;
          
          // Restore UI elements
          uiElements.forEach(el => (el as HTMLElement).style.visibility = 'visible');
          
          // Create a canvas to scale and center the image on 11x8.5" @ 300 DPI
          const canvas = document.createElement('canvas');
          canvas.width = printWidth;
          canvas.height = printHeight;
          const ctx = canvas.getContext('2d');
          
          if (ctx) {
            // Fill with white background
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, printWidth, printHeight);
            
            // Load the captured image
            const img = new window.Image();
            await new Promise((resolve) => {
              img.onload = resolve;
              img.src = originalDataUrl;
            });
            
            // Calculate scaling to fit 11x8.5 while maintaining aspect ratio
            const scale = Math.min(printWidth / 1920, printHeight / actualHeight);
            const scaledWidth = 1920 * scale;
            const scaledHeight = actualHeight * scale;
            
            // Center the image on the page
            const x = (printWidth - scaledWidth) / 2;
            const y = (printHeight - scaledHeight) / 2;
            
            // Draw the scaled image
            ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
            
            // Convert canvas to blob and download
            canvas.toBlob((blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.download = `HealthGuardHQ-Slide-${String(i + 1).padStart(2, '0')}-${slides[i].name.replace(/\s+/g, '-')}.png`;
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
              }
            }, 'image/png', 1.0);
          }
          
          // Small delay between downloads
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
      
      // Return to original slide
      await new Promise(resolve => setTimeout(resolve, 500));
      navigate(currentSlide);
    } catch (error) {
      console.error("Error generating PNGs:", error);
      alert("Error generating PNGs: " + (error as Error).message);
      navigate(currentSlide);
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Fixed size slide container for consistent capture */}
      <div 
        className="slide-container" 
        style={{ 
          width: '1920px', 
          height: '1080px',
          maxWidth: '100vw',
          maxHeight: '100vh',
          aspectRatio: '16/9',
          transform: 'scale(1)',
        }}
      >
        <Outlet />
      </div>
      
      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
        <button
          onClick={toggleFullscreen}
          className="p-3 rounded-lg bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all"
          aria-label="Toggle fullscreen"
          title="F - Toggle fullscreen"
        >
          {isFullscreen ? (
            <Minimize className="w-5 h-5 text-gray-700" />
          ) : (
            <Maximize className="w-5 h-5 text-gray-700" />
          )}
        </button>
        
        <button
          onClick={goToHome}
          className="p-3 rounded-lg bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all"
          aria-label="Go to first slide"
          title="Home - Go to first slide"
        >
          <Home className="w-5 h-5 text-gray-700" />
        </button>
        
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="p-3 rounded-lg bg-white shadow-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
          title="← Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <div className="px-4 py-2 rounded-lg bg-white shadow-lg border border-gray-200 font-mono text-sm">
          {slideNumber} / {totalSlides}
        </div>
        
        <button
          onClick={goToNext}
          disabled={currentIndex === slides.length - 1}
          className="p-3 rounded-lg bg-white shadow-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
          title="→ Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
        
        <button
          onClick={exportPDF}
          className="p-3 rounded-lg bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all"
          aria-label="Export PDF"
          title="Download PDF"
        >
          {isExporting && exportType === 'pdf' ? (
            <FileDown className="w-5 h-5 text-gray-700 animate-spin" />
          ) : (
            <FileDown className="w-5 h-5 text-gray-700" />
          )}
        </button>
        
        <button
          onClick={exportPNGs}
          className="p-3 rounded-lg bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all"
          aria-label="Export PNGs"
          title="Download PNGs"
        >
          {isExporting && exportType === 'png' ? (
            <Image className="w-5 h-5 text-gray-700 animate-spin" />
          ) : (
            <Image className="w-5 h-5 text-gray-700" />
          )}
        </button>
        
        <button
          onClick={() => setShowDeployModal(true)}
          className="p-3 rounded-lg bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all"
          aria-label="Deploy"
          title="Deploy"
        >
          <Share2 className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((slide, idx) => (
          <button
            key={slide.path}
            onClick={() => navigate(slide.path)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-[#0D9488] w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to ${slide.name}`}
            title={slide.name}
          />
        ))}
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="fixed top-8 right-8 z-40 opacity-30 hover:opacity-100 transition-opacity">
        <div className="text-xs font-mono text-gray-500 text-right space-y-1">
          <p>← → Navigate</p>
          <p>Home/End Jump</p>
          <p>F Fullscreen</p>
        </div>
      </div>
      
      {/* Export Progress Modal */}
      {isExporting && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
            <div className="text-center space-y-6">
              {exportType === 'pdf' ? (
                <FileDown className="w-16 h-16 text-[#0D9488] mx-auto animate-bounce" />
              ) : (
                <Image className="w-16 h-16 text-[#0D9488] mx-auto animate-bounce" />
              )}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  {exportType === 'pdf' ? 'Generating PDF' : 'Exporting PNGs'}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {exportType === 'pdf' 
                    ? 'Creating your pitch deck...' 
                    : 'Downloading individual slides...'}
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#0D9488] to-[#16A34A] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${exportProgress}%` }}
                />
              </div>
              
              <p className="font-mono text-sm text-gray-500">
                {Math.round(exportProgress)}% complete ({Math.ceil(exportProgress / 100 * slides.length)} of {slides.length} slides)
              </p>
              
              {/* Cancel Button */}
              <button
                onClick={() => {
                  setIsExporting(false);
                  setExportProgress(0);
                }}
                className="px-6 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Cancel (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Deploy Modal */}
      {showDeployModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowDeployModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            
            <div className="space-y-6">
              <div className="text-center">
                <Share2 className="w-16 h-16 text-[#0D9488] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  Deploy to Vercel
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Get a public shareable link for your pitch deck
                </p>
              </div>
              
              {/* Deployment Options */}
              <div className="space-y-4">
                {/* Option 1: Vercel CLI */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-[#0D9488] transition-colors">
                  <h4 className="font-bold text-lg text-gray-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                    Option 1: Vercel CLI (Recommended)
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        1. Install Vercel CLI:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400">
                        npm i -g vercel
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        2. Login to Vercel:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400">
                        vercel login
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        3. Deploy (from this project folder):
                      </p>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400">
                        vercel --prod
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 italic mt-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      You'll get a URL like: <span className="text-[#0D9488] font-medium">healthguardhq.vercel.app</span>
                    </p>
                  </div>
                </div>
                
                {/* Option 2: Vercel Dashboard */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-[#0D9488] transition-colors">
                  <h4 className="font-bold text-lg text-gray-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                    Option 2: Vercel Dashboard
                  </h4>
                  <ol className="space-y-2 text-sm text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0D9488] min-w-[20px]">1.</span>
                      <span>Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0D9488]/80">vercel.com</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0D9488] min-w-[20px]">2.</span>
                      <span>Click "Add New Project"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0D9488] min-w-[20px]">3.</span>
                      <span>Import your Git repository (GitHub/GitLab/Bitbucket)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0D9488] min-w-[20px]">4.</span>
                      <span>Vercel auto-detects Vite - just click "Deploy"</span>
                    </li>
                  </ol>
                </div>
                
                {/* Benefits */}
                <div className="bg-gradient-to-br from-[#0D9488]/10 to-[#16A34A]/10 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                    ✨ What You Get
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    <li className="flex items-center gap-2">
                      <span className="text-[#16A34A]">✓</span>
                      <span>Public shareable URL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#16A34A]">✓</span>
                      <span>Can be embedded in iframes or imported into Gamma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#16A34A]">✓</span>
                      <span>Free hosting with SSL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#16A34A]">✓</span>
                      <span>Automatic updates when you push changes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setShowDeployModal(false)}
                className="w-full px-6 py-3 rounded-lg bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-medium transition-colors"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}