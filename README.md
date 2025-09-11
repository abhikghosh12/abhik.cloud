# Abhik Ghosh - Personal Website

A modern, responsive personal website showcasing cloud architecture expertise, AI/ML projects, and professional achievements.

## 🌟 Features

- **Pink/Magenta Design Theme** - Matching the original Wix design
- **AI Detection Demo** - Interactive hero section showcasing AI capabilities
- **Responsive Navigation** - Multi-page navigation with social media integration
- **Professional Sections**:
  - AI-powered Hero Section with accuracy demonstration
  - About Me with profile and social links
  - Dynamic Resume/Career timeline
  - Projects showcase
  - Certificates gallery with Credly integration
  - Blog/Articles section
  - Photo Gallery
  - Contact/Appointment booking
  - Privacy Policy

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
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Main navigation with social icons
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── AIHeroSection.tsx     # AI detection demo hero
│   │   ├── AboutSection.tsx      # About me section
│   │   ├── CertificatesSection.tsx
│   │   ├── AppointmentSection.tsx
│   │   └── PrivacySection.tsx
│   └── common/
│       └── PlaceholderImage.tsx
├── pages/
│   ├── HomePage.tsx        # Main landing page
│   ├── ResumePage.tsx      # Career timeline
│   ├── ProjectsPage.tsx    # Project showcase
│   ├── CertificatesPage.tsx
│   ├── AppointmentPage.tsx # Contact/booking
│   ├── BlogsPage.tsx       # Articles/blog posts
│   ├── GalleryPage.tsx     # Photo gallery
│   └── PrivacyPage.tsx
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles with pink theme
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
Update social media URLs in `src/components/layout/Navbar.tsx`:
- LinkedIn: Current link active
- Xing: Current link active  
- GitHub: Current link active
- Email: `abhikghosh@outlook.com`
- Phone: `(+49) 0176-65979446`
- WhatsApp: Same as phone
- Credly: Current link active
- Medium: Current link active

### Contact Information
Located in multiple components:
- `src/components/sections/AppointmentSection.tsx`
- `src/components/layout/Footer.tsx`

## 📱 Features Implemented

✅ **Multi-page Navigation** - All 8 pages from original design
✅ **AI Detection Hero** - Animated accuracy counter and detection boxes  
✅ **Pink Theme** - Complete color scheme matching original
✅ **Social Integration** - All social media links
✅ **Responsive Design** - Mobile-first approach
✅ **Contact Forms** - Appointment booking and contact
✅ **Certificate Display** - Credly integration
✅ **Blog System** - Article listing and categories
✅ **Gallery** - Photo gallery with lightbox
✅ **Privacy Policy** - GDPR compliant

## 🌐 Pages

1. **Home** (`/`) - AI hero + About + Certificates preview
2. **Dynamic Resume** (`/resume`) - Career timeline with dark theme
3. **Projects** (`/projects`) - Project showcase grid
4. **Certificates** (`/certificates`) - Full certificate gallery
5. **Schedule Appointment** (`/appointment`) - Contact forms + Calendly
6. **Blogs** (`/blogs`) - Article listing with categories
7. **Gallery** (`/gallery`) - Photo gallery with lightbox
8. **Privacy** (`/privacy`) - Privacy policy page

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

## 🔄 Migrating from Old Website

The new website maintains all functionality from your Wix site but with:
- ✅ Better performance (no Wix limitations)
- ✅ Custom domain support
- ✅ SEO optimizations
- ✅ Mobile responsiveness
- ✅ Modern design patterns
- ✅ Professional appearance

## 📞 Support

For any questions about the website structure or modifications:
- Email: abhikghosh@outlook.com
- Review the component files for customization options
- All styling is in `src/index.css` with Tailwind CSS utility classes

---

**Note**: This website now matches your original Wix design while providing modern performance and customization capabilities. All your professional information, social links, and contact details have been preserved and enhanced.
