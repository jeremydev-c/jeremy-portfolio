# Portfolio Domain Setup - modenova.co.ke

## Current Status
- ✅ Domain `modenova.co.ke` is connected to Vercel
- ⏳ Portfolio needs to be deployed to use this domain

## Setup Steps

### Step 1: Push Portfolio to GitHub

```powershell
cd C:\Users\user\OneDrive\Documents\g\portfolio
git init
git add .
git commit -m "Professional portfolio website"
git remote add origin https://github.com/jeremydev-c/jeremy-portfolio.git
git push -u origin main
```

(Or use your existing GitHub repo)

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. **Import Project** → Select your portfolio GitHub repo
3. Framework: Next.js (auto-detected)
4. **Deploy**

### Step 3: Connect Domain

1. In Vercel → Your Portfolio Project
2. **Settings → Domains**
3. Add: `modenova.co.ke`
4. Vercel will auto-detect it (already configured in DNS)
5. Should show "Valid Configuration"

### Step 4: Update Project URLs (Optional)

If you want Fashion Fit on a subdomain, update portfolio:
- `fashion.modenova.co.ke` instead of `fashion-fit-vert.vercel.app`

---

## After Setup

✅ Portfolio will be live at: `https://modenova.co.ke`
✅ Professional branded URL
✅ SSL certificate auto-generated

