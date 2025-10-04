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
│   │   ├── Navbar.tsx              # Clean navigation with social links
│   │   └── Footer.tsx              # Professional footer
│   ├── sections/
│   │   ├── OptimizedHeroSection.tsx     # Value proposition hero
│   │   ├── ValuePropositionSection.tsx  # What I offer
│   │   └── OptimizedContactSection.tsx  # Contact form
│   └── common/
│       ├── PlaceholderImage.tsx    # Reusable placeholder component
│       └── DynamicResume.tsx       # Dynamic resume component
├── pages/
│   └── OptimizedHomePage.tsx   # Main landing page component
├── data/
│   ├── experience.json         # Professional experience data
│   ├── projects.json           # Project information
│   ├── skills.json             # Technical skills
│   └── siteConfig.json         # Site configuration
├── certificates/
│   └── page.tsx               # Certificates page
├── contact/
│   └── page.tsx               # Contact page
├── projects/
│   └── page.tsx               # Projects page
├── resume/
│   ├── layout.tsx             # Resume layout
│   └── page.tsx               # Resume page
├── globals.css                # Global styles with professional theme
├── layout.tsx                 # Root layout
└── page.tsx                   # Home page
public/
├── Certificates/              # Certificate images and PDFs
└── images/                    # Profile and other images
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

## 🚀 Improvements Made

The reorganized website now features:
- ✅ **Cleaner Structure** - Removed duplicate and obsolete files
- ✅ **Better Navigation** - Streamlined menu with essential pages
- ✅ **Improved Performance** - Optimized components and lazy loading
- ✅ **Professional Design** - Clean, modern appearance
- ✅ **Mobile-First** - Better responsive experience
- ✅ **Organized Codebase** - Easier to maintain and extend

## 📞 Support

For any questions about the website structure or modifications:
- Email: abhikghosh@outlook.com
- Review the component files for customization options
- All styling is in `src/index.css` with Tailwind CSS utility classes

---

**Note**: The website has been completely reorganized with a cleaner structure, better navigation, and improved user experience while maintaining all professional content and functionality.
