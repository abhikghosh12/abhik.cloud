// Main JavaScript functionality
class PortfolioApp {
    constructor() {
        this.isLoaded = false;
        this.currentSection = 'home';
        this.scrollThreshold = 100;
        
        this.init();
    }
    
    init() {
        this.setupLoader();
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupIntersectionObserver();
        this.setupTypewriter();
        this.setupSkillBars();
        this.setupCounters();
        this.setupContactForm();
        
        // Initialize after a short delay
        setTimeout(() => {
            this.hideLoader();
        }, 2000);
    }
    
    setupLoader() {
        const loader = document.getElementById('loading-screen');
        if (!loader) return;
        
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
        }, 100);
    }
    
    hideLoader() {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
            
            // Initialize AOS after loader is hidden
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                    offset: 100
                });
            }
            
            this.isLoaded = true;
        }
    }
    
    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }
        
        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                    
                    // Update active link
                    this.updateActiveNavLink(targetId);
                }
            });
        });
        
        // Scroll spy
        window.addEventListener('scroll', () => {
            this.updateNavbarOnScroll();
            this.updateScrollSpy();
        });
    }
    
    updateNavbarOnScroll() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        
        if (window.scrollY > this.scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    updateScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        if (current !== this.currentSection) {
            this.updateActiveNavLink(current);
            this.currentSection = current;
        }
    }
    
    updateActiveNavLink(activeId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }
    
    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrollY = window.scrollY;
            
            // Parallax effect for hero section
            const hero = document.querySelector('.hero');
            if (hero) {
                const speed = 0.5;
                hero.style.transform = `translateY(${scrollY * speed}px)`;
            }
            
            // Update scroll indicator visibility
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (scrollIndicator) {
                const opacity = Math.max(0, 1 - (scrollY / window.innerHeight));
                scrollIndicator.style.opacity = opacity;
            }
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }
    
    setupAnimations() {
        // Add stagger animation to elements
        const animateElements = (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(animateElements, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements for animation
        const elementsToAnimate = document.querySelectorAll(
            '.skill-category, .stat-item, .timeline-item, .project-card'
        );
        
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Trigger specific animations based on element type
                    if (entry.target.classList.contains('stat-item')) {
                        this.animateCounter(entry.target);
                    }
                    
                    if (entry.target.classList.contains('skill-item')) {
                        this.animateSkillBar(entry.target);
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements
        const elementsToObserve = document.querySelectorAll(
            '.stat-item, .skill-item, .about-card, .project-card'
        );
        
        elementsToObserve.forEach(el => observer.observe(el));
    }
    
    setupTypewriter() {
        const typewriterElements = document.querySelectorAll('[data-typewriter]');
        
        typewriterElements.forEach(element => {
            const text = element.textContent;
            const speed = parseInt(element.dataset.typewriterSpeed) || 50;
            
            element.textContent = '';
            element.style.borderRight = '2px solid currentColor';
            
            let index = 0;
            const typeWriter = () => {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, speed);
                } else {
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                    }, 1000);
                }
            };
            
            // Start typing when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(typeWriter, 500);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(element);
        });
    }
    
    setupSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item[data-level]');
        
        skillItems.forEach(item => {
            const level = item.getAttribute('data-level');
            const progressBar = document.createElement('div');
            progressBar.className = 'skill-progress';
            progressBar.style.cssText = `
                position: absolute;
                bottom: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 2px;
                width: 0;
                transition: width 1.5s ease-out;
            `;
            
            item.style.position = 'relative';
            item.appendChild(progressBar);
            
            // Add percentage display
            const percentage = document.createElement('span');
            percentage.className = 'skill-percentage';
            percentage.textContent = `${level}%`;
            percentage.style.cssText = `
                font-size: 0.8rem;
                color: var(--primary-color);
                font-weight: 600;
            `;
            
            item.appendChild(percentage);
        });
    }
    
    animateSkillBar(skillItem) {
        const level = skillItem.getAttribute('data-level');
        const progressBar = skillItem.querySelector('.skill-progress');
        
        if (progressBar) {
            setTimeout(() => {
                progressBar.style.width = `${level}%`;
            }, 200);
        }
    }
    
    setupCounters() {
        this.counters = document.querySelectorAll('[data-count]');
    }
    
    animateCounter(statItem) {
        const counter = statItem.querySelector('[data-count]');
        if (!counter) return;
        
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = statItem.querySelector('.stat-suffix')?.textContent || '';
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current >= target) {
                counter.textContent = target;
                return;
            }
            
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        };
        
        updateCounter();
    }
    
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(contactForm);
        });
        
        // Form validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateInput(input);
            });
            
            input.addEventListener('focus', () => {
                input.classList.remove('error');
            });
        });
    }
    
    validateInput(input) {
        const value = input.value.trim();
        const type = input.type;
        let isValid = true;
        
        if (input.required && !value) {
            isValid = false;
        }
        
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        }
        
        if (!isValid) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
        
        return isValid;
    }
    
    handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate all inputs
        const inputs = form.querySelectorAll('input, textarea');
        let allValid = true;
        
        inputs.forEach(input => {
            if (!this.validateInput(input)) {
                allValid = false;
            }
        });
        
        if (!allValid) {
            this.showNotification('Please fix the errors in the form', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
    
    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Public methods
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    getCurrentSection() {
        return this.currentSection;
    }
    
    isPageLoaded() {
        return this.isLoaded;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
        window.portfolioApp.scrollToSection(event.state.section);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const app = window.portfolioApp;
    if (!app) return;
    
    switch(e.key) {
        case 'Home':
            app.scrollToSection('home');
            break;
        case 'End':
            app.scrollToSection('contact');
            break;
        case 'Escape':
            // Close any open modals or menus
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
            break;
    }
});