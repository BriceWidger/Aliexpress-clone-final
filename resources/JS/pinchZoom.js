// Pinch Zoom functionality for mobile devices on product main images
class PinchZoom {
  constructor(element) {
    this.element = element;
    this.scale = 1;
    this.minScale = 1;
    this.maxScale = 4;
    this.lastDistance = 0;
    this.lastScale = 1;
    this.isZooming = false;
    this.startX = 0;
    this.startY = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.initialDistance = 0;
    this.initialScale = 1;
    
    this.init();
  }

  init() {
    // Add touch event listeners
    this.element.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
    this.element.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
    this.element.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: false });
    
    // Prevent default touch behaviors that might interfere
    this.element.style.touchAction = 'none';
    this.element.style.userSelect = 'none';
    this.element.style.webkitUserSelect = 'none';
    
    // Set initial transform origin to center
    this.element.style.transformOrigin = 'center center';
    this.element.style.transition = 'transform 0.1s ease-out';
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
        y: touches[0].clientY
      };
    } else if (touches.length === 2) {
      return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2
      };
    }
    return { x: 0, y: 0 };
  }

  handleTouchStart(e) {
    const touches = e.touches;
    
    if (touches.length === 1) {
      // Single touch - prepare for potential pan
      const touch = touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
    } else if (touches.length === 2) {
      // Two fingers - start pinch zoom
      e.preventDefault();
      this.isZooming = true;
      this.initialDistance = this.getDistance(touches);
      this.initialScale = this.scale;
      
      // Remove transition during pinch for smooth interaction
      this.element.style.transition = 'none';
    }
  }

  handleTouchMove(e) {
    const touches = e.touches;
    
    if (touches.length === 2 && this.isZooming) {
      // Pinch zoom
      e.preventDefault();
      
      const currentDistance = this.getDistance(touches);
      if (this.initialDistance > 0) {
        const scaleChange = currentDistance / this.initialDistance;
        this.scale = Math.max(this.minScale, Math.min(this.maxScale, this.initialScale * scaleChange));
        
        this.updateTransform();
      }
    } else if (touches.length === 1 && this.scale > 1) {
      // Pan when zoomed in
      e.preventDefault();
      
      const touch = touches[0];
      const deltaX = touch.clientX - this.startX;
      const deltaY = touch.clientY - this.startY;
      
      // Calculate bounds to prevent panning outside the image
      const rect = this.element.getBoundingClientRect();
      const maxTranslateX = (rect.width * (this.scale - 1)) / 2;
      const maxTranslateY = (rect.height * (this.scale - 1)) / 2;
      
      this.translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, deltaX));
      this.translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, deltaY));
      
      this.updateTransform();
    }
  }

  handleTouchEnd(e) {
    if (this.isZooming) {
      this.isZooming = false;
      
      // Restore transition
      this.element.style.transition = 'transform 0.3s ease-out';
      
      // Snap to min scale if very close
      if (this.scale < this.minScale + 0.1) {
        this.scale = this.minScale;
        this.translateX = 0;
        this.translateY = 0;
        this.updateTransform();
      }
    }
    
    // Reset pan tracking
    if (e.touches.length === 0) {
      this.startX = 0;
      this.startY = 0;
    }
  }

  updateTransform() {
    const transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
    this.element.style.transform = transform;
  }

  // Public method to reset zoom
  reset() {
    this.scale = this.minScale;
    this.translateX = 0;
    this.translateY = 0;
    this.element.style.transition = 'transform 0.3s ease-out';
    this.updateTransform();
  }
}

// Initialize pinch zoom for the main image when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const mainImg = document.getElementById('main-img');
  if (mainImg) {
    // Only initialize pinch zoom on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      new PinchZoom(mainImg);
    }
  }
});
