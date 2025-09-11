// 3D Effects and Graphics
class ThreeDEffects {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.heroCanvas = null;
        this.skillsCanvas = null;
        this.animationId = null;
        this.heroObjects = [];
        this.skillsObjects = [];
        
        this.init();
    }
    
    init() {
        this.initHeroBackground();
        this.initSkillsVisualization();
        this.setupEventListeners();
        this.animate();
    }
    
    initHeroBackground() {
        this.heroCanvas = document.getElementById('hero-canvas');
        if (!this.heroCanvas) return;
        
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: this.heroCanvas,
            alpha: true,
            antialias: true
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Create floating geometric shapes
        this.createFloatingShapes(scene);
        
        // Create particle system
        this.createParticleSystem(scene);
        
        // Camera position
        camera.position.z = 5;
        
        // Store references
        this.heroScene = scene;
        this.heroCamera = camera;
        this.heroRenderer = renderer;
    }
    
    createFloatingShapes(scene) {
        const shapes = [];
        const geometries = [
            new THREE.BoxGeometry(0.3, 0.3, 0.3),
            new THREE.SphereGeometry(0.15, 16, 16),
            new THREE.ConeGeometry(0.15, 0.4, 8),
            new THREE.TetrahedronGeometry(0.2),
            new THREE.OctahedronGeometry(0.18)
        ];
        
        const materials = [
            new THREE.MeshBasicMaterial({ 
                color: 0x667eea, 
                transparent: true, 
                opacity: 0.6,
                wireframe: false
            }),
            new THREE.MeshBasicMaterial({ 
                color: 0x764ba2, 
                transparent: true, 
                opacity: 0.5,
                wireframe: true
            }),
            new THREE.MeshBasicMaterial({ 
                color: 0x06b6d4, 
                transparent: true, 
                opacity: 0.7
            })
        ];
        
        // Create multiple shapes
        for (let i = 0; i < 15; i++) {
            const geometry = geometries[Math.floor(Math.random() * geometries.length)];
            const material = materials[Math.floor(Math.random() * materials.length)].clone();
            const shape = new THREE.Mesh(geometry, material);
            
            // Random position
            shape.position.x = (Math.random() - 0.5) * 20;
            shape.position.y = (Math.random() - 0.5) * 20;
            shape.position.z = (Math.random() - 0.5) * 10;
            
            // Random rotation
            shape.rotation.x = Math.random() * Math.PI * 2;
            shape.rotation.y = Math.random() * Math.PI * 2;
            shape.rotation.z = Math.random() * Math.PI * 2;
            
            // Store animation properties
            shape.userData = {
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02,
                    z: (Math.random() - 0.5) * 0.02
                },
                floatSpeed: Math.random() * 0.01 + 0.005,
                floatRange: Math.random() * 2 + 1,
                initialY: shape.position.y
            };
            
            shapes.push(shape);
            scene.add(shape);
        }
        
        this.heroObjects = shapes;
    }
    
    createParticleSystem(scene) {
        const particleCount = 200;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Position
            positions[i3] = (Math.random() - 0.5) * 50;
            positions[i3 + 1] = (Math.random() - 0.5) * 50;
            positions[i3 + 2] = (Math.random() - 0.5) * 20;
            
            // Color
            const color = new THREE.Color();
            color.setHSL(Math.random() * 0.1 + 0.6, 0.5, 0.8);
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }
        
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);
        
        this.heroParticles = particleSystem;
    }
    
    initSkillsVisualization() {
        this.skillsCanvas = document.getElementById('skills-canvas');
        if (!this.skillsCanvas) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, this.skillsCanvas.offsetWidth / this.skillsCanvas.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: this.skillsCanvas,
            alpha: true,
            antialias: true
        });
        
        renderer.setSize(this.skillsCanvas.offsetWidth, this.skillsCanvas.offsetHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        
        // Create 3D skill visualization
        this.createSkillsSphere(scene);
        
        camera.position.z = 8;
        
        this.skillsScene = scene;
        this.skillsCamera = camera;
        this.skillsRenderer = renderer;
    }
    
    createSkillsSphere(scene) {
        const skills = [
            { name: 'AWS', level: 95, color: 0xFF6B6B, position: [2, 1, 0] },
            { name: 'Azure', level: 90, color: 0xFF6B6B, position: [-2, 1.5, 0] },
            { name: 'GCP', level: 85, color: 0xFF6B6B, position: [1.5, -1, 1] },
            { name: 'Docker', level: 92, color: 0x4ECDC4, position: [-1.5, -1.5, 0] },
            { name: 'Kubernetes', level: 88, color: 0x4ECDC4, position: [0, 2, -1] },
            { name: 'Terraform', level: 90, color: 0x4ECDC4, position: [2.5, 0, -1] },
            { name: 'Python', level: 88, color: 0x45B7D1, position: [-2.5, 0, 1] },
            { name: 'AI/ML', level: 85, color: 0x45B7D1, position: [0, -2, 0] },
            { name: 'Security', level: 92, color: 0x96CEB4, position: [-1, 1, -1.5] },
            { name: 'DevOps', level: 90, color: 0x96CEB4, position: [1, -0.5, 1.5] }
        ];
        
        const skillObjects = [];
        
        skills.forEach((skill, index) => {
            // Create sphere for skill
            const radius = (skill.level / 100) * 0.3 + 0.1;
            const geometry = new THREE.SphereGeometry(radius, 16, 16);
            const material = new THREE.MeshBasicMaterial({
                color: skill.color,
                transparent: true,
                opacity: 0.8
            });
            
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(...skill.position);
            
            // Add wireframe version
            const wireGeometry = new THREE.SphereGeometry(radius + 0.05, 16, 16);
            const wireMaterial = new THREE.MeshBasicMaterial({
                color: skill.color,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            
            const wireSphere = new THREE.Mesh(wireGeometry, wireMaterial);
            wireSphere.position.set(...skill.position);
            
            // Animation properties
            sphere.userData = {
                rotationSpeed: 0.01 + Math.random() * 0.01,
                floatSpeed: 0.005 + Math.random() * 0.005,
                initialY: skill.position[1],
                floatRange: 0.5
            };
            
            wireSphere.userData = sphere.userData;
            
            skillObjects.push(sphere, wireSphere);
            scene.add(sphere);
            scene.add(wireSphere);
            
            // Connect spheres with lines
            if (index > 0) {
                const prevSkill = skills[index - 1];
                const points = [
                    new THREE.Vector3(...prevSkill.position),
                    new THREE.Vector3(...skill.position)
                ];
                
                const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                const lineMaterial = new THREE.LineBasicMaterial({
                    color: 0x667eea,
                    transparent: true,
                    opacity: 0.3
                });
                
                const line = new THREE.Line(lineGeometry, lineMaterial);
                scene.add(line);
                skillObjects.push(line);
            }
        });
        
        this.skillsObjects = skillObjects;
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        const time = Date.now() * 0.001;
        
        // Animate hero objects
        if (this.heroObjects && this.heroObjects.length > 0) {
            this.heroObjects.forEach(obj => {
                // Rotation
                obj.rotation.x += obj.userData.rotationSpeed.x;
                obj.rotation.y += obj.userData.rotationSpeed.y;
                obj.rotation.z += obj.userData.rotationSpeed.z;
                
                // Floating motion
                obj.position.y = obj.userData.initialY + 
                    Math.sin(time * obj.userData.floatSpeed) * obj.userData.floatRange;
            });
        }
        
        // Animate hero particles
        if (this.heroParticles) {
            this.heroParticles.rotation.y = time * 0.1;
        }
        
        // Animate skills objects
        if (this.skillsObjects && this.skillsObjects.length > 0) {
            this.skillsObjects.forEach(obj => {
                if (obj.userData && obj.userData.rotationSpeed) {
                    obj.rotation.y += obj.userData.rotationSpeed;
                    
                    if (obj.userData.floatSpeed) {
                        obj.position.y = obj.userData.initialY + 
                            Math.sin(time * obj.userData.floatSpeed) * obj.userData.floatRange;
                    }
                }
            });
        }
        
        // Render scenes
        if (this.heroRenderer && this.heroScene && this.heroCamera) {
            this.heroRenderer.render(this.heroScene, this.heroCamera);
        }
        
        if (this.skillsRenderer && this.skillsScene && this.skillsCamera) {
            this.skillsRenderer.render(this.skillsScene, this.skillsCamera);
        }
    }
    
    setupEventListeners() {
        // Mouse movement for camera interaction
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            
            if (this.heroCamera) {
                this.heroCamera.position.x = mouseX * 0.5;
                this.heroCamera.position.y = mouseY * 0.5;
                this.heroCamera.lookAt(0, 0, 0);
            }
            
            if (this.skillsCamera) {
                this.skillsCamera.position.x = mouseX * 2;
                this.skillsCamera.position.y = mouseY * 2;
                this.skillsCamera.lookAt(0, 0, 0);
            }
        });
        
        // Window resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });
        
        // Scroll-based animations
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }
    
    handleResize() {
        if (this.heroRenderer && this.heroCamera) {
            this.heroCamera.aspect = window.innerWidth / window.innerHeight;
            this.heroCamera.updateProjectionMatrix();
            this.heroRenderer.setSize(window.innerWidth, window.innerHeight);
        }
        
        if (this.skillsRenderer && this.skillsCamera && this.skillsCanvas) {
            const rect = this.skillsCanvas.getBoundingClientRect();
            this.skillsCamera.aspect = rect.width / rect.height;
            this.skillsCamera.updateProjectionMatrix();
            this.skillsRenderer.setSize(rect.width, rect.height);
        }
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Parallax effect for hero objects
        if (this.heroObjects) {
            this.heroObjects.forEach((obj, index) => {
                const speed = (index % 3 + 1) * 0.0005;
                obj.position.y = obj.userData.initialY - scrollY * speed;
            });
        }
        
        // Fade out hero canvas as we scroll
        if (this.heroCanvas) {
            const opacity = Math.max(0, 1 - (scrollY / windowHeight));
            this.heroCanvas.style.opacity = opacity;
        }
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        // Cleanup Three.js resources
        if (this.heroRenderer) {
            this.heroRenderer.dispose();
        }
        if (this.skillsRenderer) {
            this.skillsRenderer.dispose();
        }
        
        // Remove event listeners
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if Three.js is available
    if (typeof THREE !== 'undefined') {
        window.threeDEffects = new ThreeDEffects();
    } else {
        console.warn('Three.js not loaded, 3D effects disabled');
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.threeDEffects) {
        window.threeDEffects.destroy();
    }
});