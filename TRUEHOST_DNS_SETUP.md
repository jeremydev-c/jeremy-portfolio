# Truehost DNS Setup - Step by Step

## Current Situation
- Domain: modenova.co.ke
- Nameservers: Pointing to NSONE (dns1.p08.nsone.net, etc.)
- Problem: No DNS Management visible in Truehost

## Solution: Change Nameservers to Vercel

### Step 1: Go to Nameservers Section
1. In Truehost dashboard
2. Click on **"Nameservers"** (you should see this option)
3. You'll see current nameservers: dns1.p08.nsone.net, etc.

### Step 2: Switch to Vercel Nameservers
Change to:
```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
```

**Important:** Remove or clear Nameserver 3, 4, 5 if they exist

### Step 3: Save
Click "Save" or "Update Nameservers"

### Step 4: Wait & Verify
- Wait 2-24 hours for propagation
- Check Vercel: Status should change to "Valid Configuration"
- Your domain will work automatically!

---

## Alternative: If You Can't Change Nameservers

If Truehost doesn't let you change nameservers, you'll need to:
1. Log into NSONE (https://my.nsone.net)
2. Add DNS records there (A and CNAME records)
3. This is more complicated but works if nameservers can't be changed

---

## Quick Decision

**EASIEST:** Change nameservers to Vercel (Option 2 above)
- ✅ One-time setup
- ✅ Vercel manages everything automatically
- ✅ No need to manage DNS records manually

**If that doesn't work:** Use NSONE to add DNS records (Option 1)

