# 🚀 Spektri.Labs Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/spektri-labs-landing)

### Option 2: CLI Deploy

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Navigate to project
cd spektri-labs-live

# 3. Deploy
vercel

# 4. Follow prompts:
# ? Set up and deploy "~/spektri-labs-live"? [Y/n] y
# ? Which scope do you want to deploy to? Your Name
# ? Link to existing project? [y/N] n
# ? What's your project's name? spektri-labs
# ? In which directory is your code located? ./
```

### Option 3: GitHub Integration

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "feat: Apple-level landing page with agent collective intelligence"
git branch -M main
git remote add origin https://github.com/yourusername/spektri-labs-landing.git
git push -u origin main
```

2. **Connect to Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Click "Deploy"

---

## Alternative Deployment Options

### Deploy to Netlify

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

2. **Deploy Steps:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### Deploy to Railway

1. **Connect Repository:**
   - Go to [railway.app](https://railway.app)
   - Click "Deploy from GitHub repo"
   - Select your repository

2. **Auto-Deploy:**
   - Railway automatically detects Next.js
   - Zero configuration needed
   - Auto-deploys on git push

### Deploy to AWS Amplify

1. **Connect Repository:**
   - Go to AWS Amplify Console
   - Click "New app" > "Host web app"
   - Connect your GitHub repository

2. **Build Settings:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## Custom Domain Setup

### Vercel Custom Domain

1. **Add Domain:**
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings > Domains
   - Add your domain (e.g., `spektri.labs`)

2. **DNS Configuration:**
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### SSL Certificate
- Automatically provisioned by Vercel
- Let's Encrypt certificates
- Auto-renewal enabled

---

## Environment Variables

### Production Environment

```bash
# Vercel Dashboard > Settings > Environment Variables
NEXT_PUBLIC_APP_URL=https://spektri.labs
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
```

### Local Development

```bash
# Create .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Performance Optimization

### Vercel Edge Functions

```javascript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Add security headers
  const response = NextResponse.next()
  
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  return response
}
```

### CDN Configuration

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['cdn.spektri.labs'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
}
```

---

## Analytics Setup

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

```typescript
// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
```

---

## Monitoring & Alerts

### Vercel Monitoring

- **Uptime Monitoring:** Built-in
- **Performance Metrics:** Core Web Vitals
- **Error Tracking:** Runtime errors
- **Analytics:** User behavior

### External Monitoring

```bash
# Add Sentry for error tracking
npm install @sentry/nextjs

# Configure sentry.client.config.ts
import { init } from '@sentry/nextjs'

init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

---

## Backup & Recovery

### Database Backups
- No database in current implementation
- Future: Automated daily backups for user data

### Code Backups
- Git repository (primary)
- Vercel deployment history
- Local development backups

### Recovery Procedures

```bash
# Rollback to previous deployment
vercel rollback

# Redeploy from specific commit
vercel --prod --confirm
```

---

## Security Checklist

### Pre-Deployment Security

- [ ] Environment variables secured
- [ ] No hardcoded secrets in code
- [ ] HTTPS enabled (auto with Vercel)
- [ ] Security headers configured
- [ ] Dependencies updated

### Post-Deployment Security

- [ ] SSL certificate active
- [ ] Security headers verified
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Monitoring alerts active

---

## Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

### Performance Monitoring

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Lighthouse audit
npm install -g lighthouse
lighthouse https://spektri.labs --view
```

---

## Troubleshooting

### Common Deployment Issues

**Build Failures:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript Errors:**
```bash
# Fix type issues
npm run type-check
```

**Performance Issues:**
```bash
# Analyze bundle
npm run build -- --analyze
```

### Support Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Community Support:** GitHub Issues, Discord

---

## Launch Checklist

### Pre-Launch ✅

- [ ] All features tested locally
- [ ] TypeScript compilation successful
- [ ] Build process completes without errors
- [ ] Responsive design verified
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] SEO metadata configured
- [ ] Analytics tracking implemented

### Launch Day ✅

- [ ] Deploy to production
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] DNS propagation complete
- [ ] Social media links updated
- [ ] Team notified of launch

### Post-Launch ✅

- [ ] Monitor performance metrics
- [ ] Check error rates
- [ ] Verify analytics tracking
- [ ] User feedback collection
- [ ] Performance optimization

---

## 🎉 You're Ready to Launch!

Your Apple-level Spektri.Labs landing page is ready to revolutionize the AI agent space!

**Final Deploy Command:**
```bash
vercel --prod
```

**Expected Results:**
- ⚡ **Performance:** 95+ Lighthouse score
- 🚀 **Speed:** < 2s Time to Interactive
- 🎨 **Design:** Apple-level attention to detail
- 🤖 **3D Experience:** Interactive AI visualization
- 📱 **Responsive:** Perfect on all devices

Welcome to the future of human-AI collaboration! 🌟✨