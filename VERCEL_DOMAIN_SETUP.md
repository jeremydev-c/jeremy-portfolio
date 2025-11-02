# Vercel Domain Setup - modenova.co.ke

## Current Situation
- ✅ Domain added to Vercel
- ❌ Nameservers still pointing to NSONE (Truehost)
- ❌ Need to switch to Vercel nameservers

## Step-by-Step Setup

### Step 1: Update Nameservers at Truehost

1. **Go back to Truehost dashboard**
2. **Find "Nameservers" section** (where you see the current NSONE nameservers)
3. **Change from "Use custom nameservers" to "Use default nameservers" OR manually enter Vercel's nameservers**

### Step 2: Enter Vercel Nameservers

**Change to:**
```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
```

**OR if Truehost requires more:**
```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
Nameserver 3: (leave empty if not required)
Nameserver 4: (leave empty if not required)
Nameserver 5: (leave empty if not required)
```

### Step 3: Save Changes

- Click "Save" or "Update Nameservers"
- Note: Changes can take 24-48 hours to propagate (usually faster)

### Step 4: Verify in Vercel

After 24 hours, check Vercel:
- Go to **Project Settings → Domains**
- Status should change from "Invalid Configuration" to "Valid Configuration"
- SSL certificate will auto-generate

---

## Alternative: If Truehost Doesn't Allow Nameserver Changes

If you can't change nameservers, you can use DNS records instead:

### Add DNS Records at Truehost (NSONE)

**For modenova.co.ke:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For www.modenova.co.ke:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**For fashion.modenova.co.ke (if you want subdomain):**
```
Type: CNAME
Name: fashion
Value: cname.vercel-dns.com
TTL: 3600
```

---

## Quick Action Plan

**Option A: Change Nameservers (Recommended - Easier)**
1. Go to Truehost dashboard
2. Change nameservers to `ns1.vercel-dns.com` and `ns2.vercel-dns.com`
3. Wait 24-48 hours
4. Vercel will auto-configure everything

**Option B: Use DNS Records**
1. Keep current nameservers
2. Add A and CNAME records as shown above
3. Wait for propagation

---

## After Setup

Once configured:
- ✅ `modenova.co.ke` will point to your Vercel deployment
- ✅ `www.modenova.co.ke` will also work
- ✅ SSL certificate will auto-generate (HTTPS)
- ✅ Your portfolio will be live at modenova.co.ke!

---

## Troubleshooting

**If still showing "Invalid Configuration" after 24 hours:**
1. Double-check nameservers are exactly: `ns1.vercel-dns.com` and `ns2.vercel-dns.com`
2. Check Truehost hasn't auto-reverted changes
3. In Vercel, try removing and re-adding the domain
4. Contact Vercel support if still not working

