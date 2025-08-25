# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository

1. **Initialize Git Repository** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Srimoyee Pal Portfolio"
```

2. **Create GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `srimoyee-portfolio` (or any name you prefer)
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/srimoyee-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy with Vercel

1. **Visit [Vercel](https://vercel.com)**
2. **Sign in with GitHub**
3. **Import Your Repository**:
   - Click "New Project"
   - Find your `srimoyee-portfolio` repository
   - Click "Import"

4. **Configure Deployment**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. **Deploy**: Click "Deploy" button

### Step 3: Custom Domain (Optional)

1. **Purchase a domain** (e.g., `srimoyeepal.com`)
2. **Add domain in Vercel**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## ⚡ Alternative Deployment Options

### Deploy to Netlify

1. **Build Settings**:
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

2. **Add to package.json**:
```json
{
  "scripts": {
    "export": "next export"
  }
}
```

### Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:
```json
{
  "scripts": {
    "deploy": "npm run build && npm run export && gh-pages -d out"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

## 🔧 Environment Variables

If you need environment variables for:
- Contact form submissions
- Analytics (Google Analytics, etc.)
- Third-party integrations

Create these in your deployment platform:

**For Vercel**:
1. Go to Project Settings → Environment Variables
2. Add your variables:
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_GA_ID`
   - etc.

## 📱 PWA Configuration

The project is already configured as a Progressive Web App:
- ✅ Service Worker configured
- ✅ Manifest file ready
- ✅ Offline support enabled
- ✅ Installable on mobile devices

## 🎯 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections working (Hero, About, Skills, Projects, Experience, Contact)
- [ ] Dark mode toggle functioning
- [ ] Responsive design on mobile
- [ ] PWA installation working
- [ ] Contact form submitting (if configured)
- [ ] Social media links updated
- [ ] SEO meta tags verified
- [ ] Performance optimization (Lighthouse score 90+)

## 🔍 Testing Your Deployment

1. **Functionality Test**:
   - Navigation between sections
   - Dark/light mode toggle
   - Project filtering
   - Contact form validation
   - Mobile responsiveness

2. **Performance Test**:
   - Run Google Lighthouse audit
   - Check Core Web Vitals
   - Test on different devices

3. **PWA Test**:
   - Install app on mobile
   - Test offline functionality
   - Verify app manifest

## 🆘 Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check console errors
   - Verify all dependencies installed
   - Ensure no TypeScript errors

2. **Images Not Loading**:
   - Check image paths
   - Verify images are in `public/` folder
   - Use Next.js Image component

3. **PWA Not Working**:
   - Check service worker registration
   - Verify manifest.json
   - Test in production build only

### Getting Help:

- Check Vercel documentation
- Review Next.js deployment guides
- Contact: [Your support email]

---

**Happy Deploying! 🚀**
