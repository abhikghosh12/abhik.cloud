# Abhik Ghosh - Professional Portfolio

A clean, modern, and responsive portfolio website showcasing cloud architecture expertise, professional experience, and technical skills.

## 🌟 Features

- **Modern Design** - Clean, professional pink/magenta theme
- **Optimized Performance** - Fast loading with lazy-loaded components
- **Mobile-First** - Fully responsive design for all devices
- **Professional Sections**:
  - Hero Section with value proposition
  - Technical expertise showcase
  - Certification gallery
  - Professional experience timeline
  - Project portfolio
  - Blog articles
  - Contact form

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Navigation with social links
│   │   └── Footer.tsx              # Professional footer
│   ├── sections/
│   │   ├── OptimizedHeroSection.tsx     # Hero section with professional summary
│   │   ├── ValuePropositionSection.tsx  # Service offerings
│   │   └── OptimizedContactSection.tsx  # Contact CTA section
│   └── common/
│       ├── PlaceholderImage.tsx    # Reusable placeholder component
│       ├── DynamicResume.tsx       # Dynamic resume with company logos
│       └── ProfileImage.tsx        # Profile image component
├── pages/
│   └── OptimizedHomePage.tsx   # Modular home page component
├── data/
│   ├── experience.json         # Professional experience data
│   ├── projects.json           # Project portfolio data
│   ├── skills.json             # Technical skills & certifications
│   └── siteConfig.json         # Site configuration
├── certificates/
│   └── page.tsx               # Certificates & documents page
├── contact/
│   └── page.tsx               # Contact form page
├── projects/
│   └── page.tsx               # Projects portfolio page
├── resume/
│   ├── layout.tsx             # Resume layout
│   └── page.tsx               # Interactive resume page
├── globals.css                # Global styles with pink/purple theme
├── layout.tsx                 # Root layout with metadata
└── page.tsx                   # Home page entry point
public/
├── Certificates/
│   ├── logos/                 # Company & university logos
│   │   ├── capgemini.png      # Capgemini logo
│   │   ├── rwth.png           # RWTH Aachen University
│   │   ├── uniklinik.png      # Universitätsklinikum Augsburg
│   │   ├── otto-von-guericke.png # Otto-von-Guericke University
│   │   ├── vtu.jpeg           # Visveswaraiah Technological University
│   │   ├── jsw.jpeg           # JSW Energy
│   │   ├── Fraunhofer.jpeg    # Fraunhofer IFF
│   │   └── researchgate.png   # ResearchGate
│   ├── pdfs/                  # Certificate PDFs
│   ├── resumes/               # Resume documents
│   └── [certification badges] # Various certification images
└── images/
    └── profile/
        └── profile.png        # Professional headshot
```

## 🎨 Design System

### Colors
- **Primary Pink**: `#E91E63`
- **Secondary Pink**: `#F06292`
- **Purple**: `#9C27B0`
- **Light Purple**: `#CE93D8`
- **Background**: White with pink gradients

### Key Components
- **Navigation**: Clean header with social icons and contact button
- **Hero Section**: AI detection demo with animated accuracy counter
- **Cards**: White cards with pink accents and hover effects
- **Buttons**: Pink gradient buttons with hover animations
- **Social Icons**: Colored icons for each platform

## 🔧 Configuration

### Social Media Links
Social links are integrated in both navbar and footer:
- LinkedIn: Professional networking
- GitHub: Code repositories and contributions
- Email: `abhikghosh@outlook.com`
- Phone: `+49 176 65979446`

### Contact Information
Located in multiple components:
- `src/components/sections/AppointmentSection.tsx`
- `src/components/layout/Footer.tsx`

## 📱 Features Implemented

✅ **Clean Navigation** - Streamlined 6-page structure
✅ **Professional Hero** - Value proposition focused
✅ **Modern Design** - Clean pink/magenta theme
✅ **Social Integration** - LinkedIn, GitHub, Email
✅ **Mobile Responsive** - Optimized for all devices
✅ **Contact System** - Professional contact form
✅ **Certification Display** - Visual badge showcase
✅ **Blog Integration** - Technical article system
✅ **Performance Optimized** - Fast loading and SEO friendly

## 🌐 Pages

1. **Home** (`/`) - Hero + Value Prop + Skills + Certifications + Experience + Contact
2. **Resume** (`/resume`) - Detailed career timeline and experience
3. **Projects** (`/projects`) - Complete project portfolio with case studies
4. **Certificates** (`/certificates`) - Professional certifications and badges
5. **Contact** (`/appointment`) - Contact form and scheduling
6. **Blog** (`/blogs`) - Technical articles and insights

## 🚀 Deployment

The website is configured for deployment to:
- GitHub Pages (via `.nojekyll` file)
- Netlify/Vercel (via build configuration)
- Any static hosting service

### GitHub Pages Deployment
```bash
npm run build
# Deploy the `dist` folder to your hosting service
```

## 🚀 Recent Improvements

The reorganized website now features:
- ✅ **Clean Architecture** - Modular components with proper separation of concerns
- ✅ **Professional Branding** - Company logos integrated throughout resume
- ✅ **Optimized Performance** - Streamlined components and efficient loading
- ✅ **Modern Design** - Pink/purple gradient theme with glass morphism
- ✅ **Mobile-First** - Fully responsive across all devices
- ✅ **Document Management** - ZIP download functionality for all documents
- ✅ **Interactive Resume** - Dynamic resume with company logos and project details
- ✅ **Certification Showcase** - Filterable badges with verification links

## 📞 Support

For any questions about the website structure or modifications:
- Email: abhikghosh@outlook.com
- Review the component files for customization options
- All styling is in `src/index.css` with Tailwind CSS utility classes

---

**Note**: The website has been completely reorganized with a cleaner structure, better navigation, and improved user experience while maintaining all professional content and functionality.
