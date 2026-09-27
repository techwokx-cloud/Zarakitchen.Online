# Zara Kitchen - Fresh Build Setup Guide

## ✅ All Files Created (Ready to Deploy)

This is a **complete Next.js application** with the CORRECT folder structure for shared hosting.

### Folder Structure
```
zarakitchen/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── MenuGrid.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx           (Home)
│   ├── menu.tsx            (Menu)
│   ├── gallery.tsx         (Gallery)
│   ├── about.tsx           (About)
│   ├── contact.tsx         (Contact)
│   └── catering.tsx        (Catering)
├── styles/
│   └── globals.css
├── data/
│   └── menu-data.ts        (16 categories, 64 menu items)
├── public/
│   ├── appetizers/         (create empty, add images later)
│   ├── bakery/
│   ├── chinese/
│   ├── desserts/
│   ├── extra-dishes/
│   ├── from-grill/
│   ├── ghanaian/
│   ├── healthy-breakfast/
│   ├── hot-breakfast/
│   ├── indian/
│   ├── light-meals/
│   ├── on-grill/
│   ├── pasta/
│   ├── rice-dishes/
│   ├── salads/
│   └── soups/
├── .gitignore
├── package.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── server.js               (For Passenger deployment)
```

---

## 📋 Files in /mnt/user-data/outputs/

| File | Destination |
|------|-------------|
| `FRESH-package.json` | `package.json` |
| `FRESH-next.config.js` | `next.config.js` |
| `FRESH-tsconfig.json` | `tsconfig.json` |
| `FRESH-postcss.config.js` | `postcss.config.js` |
| `FRESH-tailwind.config.js` | `tailwind.config.js` |
| `FRESH-server.js` | `server.js` |
| `FRESH-.gitignore` | `.gitignore` |
| `FRESH-styles-globals.css` | `styles/globals.css` |
| `FRESH-data-menu-data.ts` | `data/menu-data.ts` |
| `FRESH-components-Navbar.tsx` | `components/Navbar.tsx` |
| `FRESH-components-Footer.tsx` | `components/Footer.tsx` |
| `FRESH-components-MenuGrid.tsx` | `components/MenuGrid.tsx` |
| `FRESH-pages-_app.tsx` | `pages/_app.tsx` |
| `FRESH-pages-_document.tsx` | `pages/_document.tsx` |
| `FRESH-pages-index.tsx` | `pages/index.tsx` |
| `FRESH-pages-menu.tsx` | `pages/menu.tsx` |
| `FRESH-pages-gallery.tsx` | `pages/gallery.tsx` |
| `FRESH-pages-about.tsx` | `pages/about.tsx` |
| `FRESH-pages-contact.tsx` | `pages/contact.tsx` |
| `FRESH-pages-catering.tsx` | `pages/catering.tsx` |

---

## 🚀 Next Steps

### **Option 1: Push to GitHub (for Render auto-deploy)**
1. Create fresh GitHub repo (or reset existing one)
2. Copy ALL files from /mnt/user-data/outputs/ to your local folder
3. Rename files (remove FRESH- prefix):
   ```bash
   # In zarakitchen folder
   mv FRESH-package.json package.json
   mv FRESH-next.config.js next.config.js
   # ... etc for all files
   ```
4. Create folders: `components/`, `pages/`, `styles/`, `data/`, `public/`
5. Move files to correct folders
6. Create empty folders in `public/` for each category (appetizers/, bakery/, etc.)
7. Initialize Git & push:
   ```bash
   git init
   git add .
   git commit -m "Fresh Zara Kitchen build - correct folder structure"
   git branch -M main
   git remote add origin https://github.com/techwokx-cloud/Zarakitchen.Online.git
   git push -u origin main --force
   ```
8. **Render will auto-deploy** and show the new red/green design ✅

### **Option 2: Direct SSH to server (if GitHub push fails)**
1. SSH to server: `ssh -p 2222 agbchrtz@104.243.37.71`
2. Remove old repo: `rm -rf /home/agbchrtz/repositories/zarakitchengh`
3. Copy fresh files via SCP or git clone
4. Run `npm install && npm run build`

---

## ✨ Features Implemented

- ✅ **Navbar** - Sticky nav with Z logo, responsive mobile menu
- ✅ **Footer** - Red background, 5 columns of info/links
- ✅ **Home** - Hero section + category circles + CTA buttons
- ✅ **Menu** - All 64 items across 16 categories, filter by category
- ✅ **Gallery** - 24-item image grid with categories
- ✅ **About** - Company story, values, team info
- ✅ **Contact** - Form, phone, email, WhatsApp, hours, location
- ✅ **Catering** - Services, packages, pricing, CTA
- ✅ **Styling** - Tailwind CSS with Zara colors (red #DC2626, green #16A34A, yellow #FBBF24)
- ✅ **Responsive** - Mobile-first design, works on all devices
- ✅ **Colors** - Red nav/footer, black plate borders, all brand colors
- ✅ **Buttons** - WhatsApp Order buttons on every page
- ✅ **SEO** - Page titles, meta descriptions, Open Graph ready

---

## 🎨 Design System

| Color | Hex | Usage |
|-------|-----|-------|
| Red | `#DC2626` | Nav, footer, buttons, headings |
| Green | `#16A34A` | Secondary buttons, accents |
| Yellow | `#FBBF24` | Highlights, badges |
| Black | `#000000` | Category circle borders, text |
| Dark Gray | `#1f2937` | Body text, dark areas |

---

## 📱 Navigation Structure

- **Home** (`/`) - Hero + categories + about + CTA
- **Menu** (`/menu`) - All items + category filter
- **Gallery** (`/gallery`) - Food images
- **About** (`/about`) - Story, values, team
- **Contact** (`/contact`) - Form, location, hours
- **WhatsApp** - Order buttons everywhere linking to +233591599629

---

## 🔧 Tech Stack

- **Framework**: Next.js 14 with Pages Router
- **Styling**: Tailwind CSS + custom globals.css
- **Language**: TypeScript (all .tsx files)
- **Database**: MySQL (already configured, no migrations needed yet)
- **Deployment**: 
  - **Render** (via GitHub push) - preferred
  - **Shared hosting with Passenger** - fallback with server.js

---

## 📸 Images/Placeholders

- ✅ Menu items have **placeholder image paths** (no images uploaded yet)
- ✅ Category folders exist in `public/` structure
- ✅ Gray placeholder boxes show in gallery, menu, etc.
- When real images are added, update files in `public/` and they'll appear instantly

---

## ✅ Production Ready?

- ✅ **Folder structure** - Correct for shared hosting (NO src/ folder)
- ✅ **All pages** - 6 pages fully built
- ✅ **Components** - Navbar, Footer, MenuGrid reusable
- ✅ **Data** - 64 menu items across 16 categories
- ✅ **Styling** - Tailwind + custom CSS
- ✅ **Forms** - Contact form ready
- ✅ **Responsive** - Mobile, tablet, desktop
- ✅ **SEO** - Titles, descriptions per page
- ⚠️ **Images** - Need to add real photos
- ⚠️ **Email** - Contact form needs backend handler

---

## 🎯 Final Steps

1. ✅ **Files ready** - All in `/mnt/user-data/outputs/`
2. ⏳ **Push to GitHub** - Reset repo with fresh build
3. ⏳ **Render deploys** - Auto-deploy from GitHub
4. ⏳ **Site goes live** - Old yellow/black → New red/green ✨
5. 📸 **Add real images** - Drop photos in `public/` folders
6. 📧 **Email handler** - Connect contact form to backend (Phase 2)
7. 🛠️ **Admin dashboard** - Phase 2

---

**Ready to deploy?** Let me know and I'll help you push to GitHub! 🚀
