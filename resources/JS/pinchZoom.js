// Pinch Zoom functionality for mobile devices on product main images
class PinchZoom {
  constructor(element) {
    this.element = element;
    this.scale = 1;
    this.minScale = 1;
    this.maxScale = 4;
    this.isZooming = false;
    this.startX = 0;
    this.startY = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.initialDistance = 0;
    this.initialScale = 1;
    this.lastTap = 0;
    this.startDistance = 0;
    this.startScale = 1;

    console.log("PinchZoom constructor called for element:", element);
    this.init();
  }

  init() {
    console.log("Initializing pinch zoom on element:", this.element);

    // Only modify styles on actual touch devices to avoid interfering with desktop
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Prevent default touch behaviors that might interfere
      this.element.style.touchAction = "none";
      this.element.style.userSelect = "none";
      this.element.style.webkitUserSelect = "none";
      this.element.style.webkitTouchCallout = "none";
      this.element.style.webkitUserDrag = "none";

      // Set initial transform origin to center
      this.element.style.transformOrigin = "center center";
      this.element.style.transition = "transform 0.2s ease-out";
    }

    // Add touch event listeners with proper options (only on touch devices)
    if (isTouchDevice) {
      this.element.addEventListener(
        "touchstart",
        this.handleTouchStart.bind(this),
        {
          passive: false,
          capture: true,
        }
      );
      this.element.addEventListener(
        "touchmove",
        this.handleTouchMove.bind(this),
        {
          passive: false,
          capture: true,
        }
      );
      this.element.addEventListener(
        "touchend",
        this.handleTouchEnd.bind(this),
        {
          passive: false,
          capture: true,
        }
      );

      // Prevent context menu on long press
      this.element.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        return false;
      });

      // Add visual indicator
      this.addZoomIndicator();
    }

    console.log("Pinch zoom initialized successfully");
  }

  getDistance(touches) {
    if (touches.length < 2) return 0;

    const touch1 = touches[0];
    const touch2 = touches[1];

    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;

    return Math.sqrt(dx * dx + dy * dy);
  }

  getCenter(touches) {
    if (touches.length === 1) {
      return {
        x: touches[0].clientX,
        y: touches[0].clientY,
      };
    } else if (touches.length >= 2) {
      return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2,
      };
    }
    return { x: 0, y: 0 };
  }

  handleTouchStart(e) {
    console.log("Touch start event:", e.touches.length, "touches");

    // Always prevent default to avoid conflicts
    e.preventDefault();
    e.stopPropagation();

    const touches = e.touches;
    const currentTime = Date.now();

    if (touches.length === 1) {
      // Single touch - prepare for potential pan or double tap
      const touch = touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;

      // Check for double tap
      if (currentTime - this.lastTap < 300) {
        console.log("Double tap detected");
        this.handleDoubleTap();
        return;
      }
      this.lastTap = currentTime;
    } else if (touches.length === 2) {
      // Two fingers - start pinch zoom
      console.log("Two finger pinch detected");
      this.isZooming = true;
      this.startDistance = this.getDistance(touches);
      this.startScale = this.scale;

      // Remove transition during active pinch for smoother interaction
      this.element.style.transition = "none";
    }
  }

  handleTouchMove(e) {
    // Always prevent default and stop propagation
    e.preventDefault();
    e.stopPropagation();

    const touches = e.touches;

    if (touches.length === 2 && this.isZooming) {
      // Handle pinch zoom
      console.log("Pinch zoom in progress");

      const currentDistance = this.getDistance(touches);

      if (this.startDistance > 0 && currentDistance > 0) {
        const scaleChange = currentDistance / this.startDistance;
        const newScale = this.startScale * scaleChange;

        // Apply scale limits
        this.scale = Math.max(this.minScale, Math.min(this.maxScale, newScale));

        console.log("Current scale:", this.scale.toFixed(2));
        this.updateTransform();
      }
    } else if (touches.length === 1 && this.scale > 1.1) {
      // Handle panning when zoomed in
      const touch = touches[0];
      const deltaX = touch.clientX - this.startX;
      const deltaY = touch.clientY - this.startY;

      // Calculate maximum translation bounds
      const rect = this.element.getBoundingClientRect();
      const maxTranslateX = (rect.width * (this.scale - 1)) / 2;
      const maxTranslateY = (rect.height * (this.scale - 1)) / 2;

      // Apply bounds to prevent over-panning
      this.translateX = Math.max(
        -maxTranslateX,
        Math.min(maxTranslateX, deltaX)
      );
      this.translateY = Math.max(
        -maxTranslateY,
        Math.min(maxTranslateY, deltaY)
      );

      this.updateTransform();
    }
  }

  handleTouchEnd(e) {
    console.log("Touch end event");

    // Always prevent default and stop propagation
    e.preventDefault();
    e.stopPropagation();

    if (this.isZooming) {
      this.isZooming = false;

      // Restore transition for smooth animations
      this.element.style.transition = "transform 0.3s ease-out";

      // Snap to minimum scale if very close
      if (this.scale < this.minScale + 0.1) {
        this.reset();
      }
    }

    // Reset pan tracking when no touches remain
    if (e.touches.length === 0) {
      this.startX = 0;
      this.startY = 0;
    }
  }

  handleDoubleTap() {
    console.log("Handling double tap");

    if (this.scale <= this.minScale + 0.1) {
      // Zoom in to 2x
      this.scale = 2;
      this.translateX = 0;
      this.translateY = 0;
    } else {
      // Reset zoom
      this.reset();
      return;
    }

    this.element.style.transition = "transform 0.3s ease-out";
    this.updateTransform();
  }

  updateTransform() {
    const transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
    this.element.style.transform = transform;
  }

  // Public method to reset zoom
  reset() {
    console.log("Resetting zoom");
    this.scale = this.minScale;
    this.translateX = 0;
    this.translateY = 0;
    this.element.style.transition = "transform 0.3s ease-out";
    this.updateTransform();
  }

  // Add visual indicator for pinch zoom
  addZoomIndicator() {
    // Only show indicator on touch devices
    if (!("ontouchstart" in window)) return;

    const indicator = document.createElement("div");
    indicator.id = "pinch-zoom-indicator";
    indicator.innerHTML = "� Pinch to zoom • Double tap to toggle";
    indicator.style.cssText = `
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      z-index: 1000;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;

    // Add to the parent container
    const container = this.element.parentElement;
    if (container) {
      container.style.position = "relative";
      container.appendChild(indicator);

      // Hide after 4 seconds
      setTimeout(() => {
        if (indicator && indicator.parentElement) {
          indicator.style.opacity = "0";
          indicator.style.transition = "opacity 0.5s ease-out";
          setTimeout(() => {
            if (indicator && indicator.parentElement) {
              indicator.parentElement.removeChild(indicator);
            }
          }, 500);
        }
      }, 4000);
    }
  }
}

// Improved initialization with better mobile detection
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing pinch zoom...");

  // Enhanced mobile/touch detection
  function isMobileDevice() {
    const touchSupport =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const userAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Only enable on actual mobile devices, not desktop browsers
    // Removed screenSize check to prevent activation on desktop
    return touchSupport && userAgent;
  }

  function initializePinchZoom() {
    const mainImg = document.getElementById("main-img");

    if (!mainImg) {
      console.log("Main image not found");
      return false;
    }

    if (!isMobileDevice()) {
      console.log("Not a mobile device, skipping pinch zoom");
      return false;
    }

    console.log(
      "Mobile device detected, initializing pinch zoom for main image"
    );

    // Function to create pinch zoom instance
    function createPinchZoom() {
      try {
        new PinchZoom(mainImg);
        console.log("Pinch zoom created successfully");
        return true;
      } catch (error) {
        console.error("Error creating pinch zoom:", error);
        return false;
      }
    }

    // Initialize immediately if image is already loaded
    if (mainImg.complete && mainImg.naturalHeight !== 0) {
      console.log("Image already loaded, creating pinch zoom");
      return createPinchZoom();
    } else {
      // Wait for image to load
      console.log("Waiting for image to load...");
      mainImg.addEventListener("load", function () {
        console.log("Image loaded, creating pinch zoom");
        createPinchZoom();
      });

      // Fallback in case load event doesn't fire
      setTimeout(() => {
        if (mainImg.complete) {
          console.log("Image loaded (fallback), creating pinch zoom");
          createPinchZoom();
        }
      }, 1000);

      return true;
    }
  }

  // Try to initialize immediately
  if (!initializePinchZoom()) {
    // Retry after a delay in case elements are added dynamically
    console.log("Retrying pinch zoom initialization...");
    setTimeout(initializePinchZoom, 500);
  }
});

// Also initialize when page becomes visible (for PWA/cached pages)
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    setTimeout(() => {
      const mainImg = document.getElementById("main-img");
      if (mainImg && !mainImg.pinchZoomInitialized) {
        console.log(
          "Page became visible, checking if mobile device for pinch zoom"
        );
        const isTouchDevice =
          "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const isMobileUserAgent =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );

        if (isTouchDevice && isMobileUserAgent) {
          console.log("Mobile device confirmed, reinitializing pinch zoom");
          new PinchZoom(mainImg);
          mainImg.pinchZoomInitialized = true;
        }
      }
    }, 100);
  }
});

// Disable mouse events on touch devices to prevent conflicts
document.addEventListener("DOMContentLoaded", function () {
  // Only disable mouse events on actual mobile devices, not desktop browsers
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isMobileUserAgent =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const isActualMobileDevice = isTouchDevice && isMobileUserAgent;

  if (isActualMobileDevice) {
    console.log(
      "Actual mobile device detected, disabling mouse hover events for main image"
    );

    const mainImg = document.getElementById("main-img");
    if (mainImg) {
      // Remove the onmousemove attribute on touch devices
      mainImg.removeAttribute("onmousemove");

      // Also disable the magnifying glass overlays on touch devices
      const magOverlay = document.querySelector('[id^="mag-overlay"]');
      const magOverlayTwo = document.querySelector('[id^="mag-overlay-two"]');

      if (magOverlay) {
        magOverlay.style.display = "none !important";
      }
      if (magOverlayTwo) {
        magOverlayTwo.style.display = "none !important";
      }

      console.log("Mouse hover effects disabled for mobile device");
    }
  } else {
    console.log(
      "Desktop device detected, preserving mouse hover functionality"
    );
  }
});

// Global function for testing pinch zoom functionality
window.testPinchZoom = function () {
  console.log("Testing pinch zoom functionality...");
  const mainImg = document.getElementById("main-img");
  if (mainImg) {
    console.log(
      "Main image found, forcing pinch zoom initialization for testing"
    );
    try {
      // Only create if not already exists to avoid conflicts
      if (!mainImg.pinchZoomInitialized) {
        new PinchZoom(mainImg);
        mainImg.pinchZoomInitialized = true;
        console.log("Pinch zoom test initialization complete");
        return "Pinch zoom initialized for testing";
      } else {
        return "Pinch zoom already initialized";
      }
    } catch (error) {
      console.error("Error initializing pinch zoom:", error);
      return "Error: " + error.message;
    }
  } else {
    console.log("Main image not found");
    return "Error: Main image not found";
  }
};

// Log initialization status
console.log("Pinch zoom script loaded successfully");
