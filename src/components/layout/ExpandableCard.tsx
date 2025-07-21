import { useEffect, useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

export function ExpandableCard({ icon, title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const id = title.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    if (isExpanded) {
      // Capture current scroll position when expanding
      setScrollTop(window.scrollY);
  
      // Lock scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll
      document.body.style.overflow = '';
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  return (
    <>
      {!isExpanded && (
        <div id={id} className="relative w-full">
          <div className="z-10 flex items-center justify-between p-6 bg-[var(--glass-bg-2)] backdrop-blur-md rounded-lg mb-4">
            <div className="flex items-center gap-4">
              {icon && <div className="p-2 bg-purple-500/20 rounded-lg">{icon}</div>}
              <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <button
              onClick={() => setIsExpanded(true)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Maximize"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 pt-0">{children}</div>
        </div>
      )}

      {isExpanded && (
        <div>
          {/* Fullscreen overlay */}
          <div className="fixed inset-0 z-40 bg-black/30">
          </div>

        
          <div
            className="absolute left-1/2 -translate-x-1/2 max-w-[100rem] w-full mt-4 h-[calc(100vh-4vh)] z-50 glass-card"
            style={{ top: `${scrollTop}px` }}
          >
            <div className="glass-card w-full h-full overflow-y-auto shadow-lg bg-[var(--glass-bg-2)] backdrop-blur-md">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  {icon && <div className="p-2 bg-purple-500/20 rounded-lg">{icon}</div>}
                  <h2 className="text-xl font-semibold">{title}</h2>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Minimize"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 pt-4">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
