// TalesRT Portfolio - Mobile Menu & Lightbox
(function() {
    'use strict';

    // Mobile menu toggle
    function initMobileMenu() {
        var toggle = document.querySelector('.mobile-menu-toggle');
        var overlay = document.querySelector('.mobile-menu-overlay');
        
        if (toggle && overlay) {
            toggle.addEventListener('click', function() {
                overlay.classList.toggle('active');
                toggle.classList.toggle('active');
            });
            
            // Close menu when clicking overlay background
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });
        }
    }

    // Lightbox for importance 1 projects (studies)
    function initLightbox() {
        var lightbox = document.getElementById('lightbox');
        var lightboxImage = document.getElementById('lightbox-image');
        var closeBtn = document.querySelector('.lightbox-close');
        var importance1Cards = document.querySelectorAll('.importance-1');
        
        if (!lightbox || !lightboxImage) return;
        
        // Attach click handlers to importance-1 cards
        importance1Cards.forEach(function(card) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                var imageUrl = this.getAttribute('data-image');
                if (imageUrl) {
                    lightboxImage.src = imageUrl;
                    lightbox.classList.add('active');
                }
            });
        });
        
        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                lightbox.classList.remove('active');
            });
        }
        
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }

    // Initialize on DOM ready
    function init() {
        initMobileMenu();
        initLightbox();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
