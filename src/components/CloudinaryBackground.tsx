import { useEffect, useRef } from 'react';

interface CloudinaryBackgroundProps {
  onReady: () => void;
}

export default function CloudinaryBackground({ onReady }: CloudinaryBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isTriggered = false;
    const triggerReady = () => {
      if (!isTriggered) {
        isTriggered = true;
        onReady();
      }
    };

    // Safety fallback: if video doesn't play or load in 6 seconds, trigger ready anyway
    const safetyTimer = setTimeout(() => {
      triggerReady();
    }, 6000);

    // Create the video element dynamically so React's virtual DOM doesn't track or manage it.
    // This completely prevents React virtual DOM mismatch errors (e.g., NotFoundError)
    // when Cloudinary's script mutates/wraps the video element in the DOM.
    const videoElement = document.createElement('video');
    videoElement.id = 'player';
    videoElement.className = 'w-full h-full object-cover pointer-events-none cld-video-player cld-fluid';
    videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.loop = true;
    videoElement.setAttribute('autoplay', 'true');
    videoElement.setAttribute('loop', 'true');
    // Direct Cloudinary source URL as fallback
    videoElement.src = 'https://res.cloudinary.com/doph9qsod/video/upload/q_auto,f_auto/jelvanportfoliovideo.mp4';
    
    // Core fallback: even if player wrapping alters properties, listen to native ended event to loop
    videoElement.addEventListener('ended', () => {
      videoElement.play().catch(err => {
        console.log("Native element replay triggered:", err);
      });
    });

    // Listen to native video events for immediate response
    videoElement.addEventListener('playing', triggerReady);
    videoElement.addEventListener('canplaythrough', triggerReady);
    
    containerRef.current.appendChild(videoElement);

    const initPlayer = () => {
      const cloudinary = (window as any).cloudinary;
      if (cloudinary) {
        try {
          // Supports the modern cloudinary.videoPlayer global API or older cloudinary.player creator
          const playerCreator = cloudinary.videoPlayer || cloudinary.player;
          if (playerCreator) {
            playerInstanceRef.current = playerCreator(videoElement, {
              cloud_name: 'doph9qsod',
              cloudName: 'doph9qsod',
              publicId: 'jelvanportfoliovideo',
              profile: 'cld-looping',
              muted: true,
              autoplay: true,
              loop: true,
              controls: false,
              preload: 'auto',
            });

            // Ensure it autoplays, is muted, and registers ended listener
            if (playerInstanceRef.current) {
              playerInstanceRef.current.on('ended', () => {
                playerInstanceRef.current.play().catch((err: any) => {
                  console.log("Cloudinary Player replay triggered:", err);
                });
              });

              // Also hook into player-level events to be absolutely sure
              playerInstanceRef.current.on('play', triggerReady);
              playerInstanceRef.current.on('playing', triggerReady);
              playerInstanceRef.current.on('canplaythrough', triggerReady);

              playerInstanceRef.current.play().catch((err: any) => {
                console.log("Auto-play was prevented or failed:", err);
              });
            }
          }
        } catch (error) {
          console.error("Failed to initialize Cloudinary Video Player:", error);
        }
      }
    };

    // Polling mechanism to wait for window.cloudinary script to load (deferred scripts)
    let pollCount = 0;
    const checkAndInit = () => {
      if ((window as any).cloudinary) {
        initPlayer();
      } else if (pollCount < 50) {
        pollCount++;
        setTimeout(checkAndInit, 100);
      }
    };
    checkAndInit();

    return () => {
      clearTimeout(safetyTimer);
      if (playerInstanceRef.current) {
        try {
          playerInstanceRef.current.dispose();
        } catch (e) {
          // Ignore disposal errors on unmount
        }
      }
      // Safely clean up the container's DOM children so React is unaffected
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [onReady]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-2] overflow-hidden bg-[#070707]">
      {/* React-untracked container for DOM-mutating Cloudinary Player */}
      <div ref={containerRef} className="w-full h-full" />
      {/* Soft overlay to blend the video into the dark slate aesthetic of the site */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/60 via-[#070707]/30 to-[#070707]/75 mix-blend-multiply pointer-events-none" />
    </div>
  );
}
