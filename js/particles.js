// Particles.js Configuration and Integration
class ParticleSystem {
    constructor() {
        this.init();
    }
    
    init() {
        if (typeof particlesJS !== 'undefined') {
            this.initParticles();
        } else {
            console.warn('Particles.js not loaded');
        }
    }
    
    initParticles() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Update particles based on scroll position
    updateOnScroll(scrollY) {
        if (typeof pJSDom !== 'undefined' && pJSDom[0] && pJSDom[0].pJS) {
            const particles = pJSDom[0].pJS.particles;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollProgress = scrollY / maxScroll;
            
            // Fade particles as user scrolls
            particles.opacity.value = Math.max(0.1, 0.5 - scrollProgress * 0.4);
            
            // Slow down particles as user scrolls
            particles.move.speed = Math.max(0.5, 2 - scrollProgress * 1.5);
        }
    }
    
    // Responsive particle count
    updateParticleCount() {
        if (typeof pJSDom !== 'undefined' && pJSDom[0] && pJSDom[0].pJS) {
            const width = window.innerWidth;
            let particleCount = 80;
            
            if (width < 768) {
                particleCount = 40; // Mobile
            } else if (width < 1024) {
                particleCount = 60; // Tablet
            }
            
            pJSDom[0].pJS.particles.number.value = particleCount;
            pJSDom[0].pJS.fn.particlesRefresh();
        }
    }
}

// Advanced particle configurations for different sections
const ParticleConfigs = {
    hero: {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#667eea", "#764ba2", "#06b6d4"]
            },
            "shape": {
                "type": ["circle", "triangle"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    },
    
    skills: {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 400
                }
            },
            "color": {
                "value": ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 2,
                    "color": "#ffffff"
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": true
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 100,
                    "size": 8,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                }
            }
        },
        "retina_detect": true
    }
};

// Initialize particles when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const particleSystem = new ParticleSystem();
    
    // Update particles on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                particleSystem.updateOnScroll(window.scrollY);
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Update particle count on resize
    window.addEventListener('resize', () => {
        particleSystem.updateParticleCount();
    });
    
    // Store reference globally
    window.particleSystem = particleSystem;
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ParticleSystem, ParticleConfigs };
}