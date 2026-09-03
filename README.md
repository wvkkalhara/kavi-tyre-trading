# KAVI TYRE TRADING — POS & Inventory Hub

A fully static, **offline-first PWA** for a tyre shop: 5-category inventory sheets, camera barcode scanning, supplier-bill restocking, offline POS billing with thermal receipts, customer/supplier records, analytics — all synced with **one Google Spreadsheet** (each category = one tab), and hostable **free on GitHub Pages**. No server, no database to run.

## One-time setup

### 1. Push to GitHub
```bash
git init && git add -A && git commit -m "KAVI TYRE TRADING"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

### 2. Turn on GitHub Pages
Repo → **Settings → Pages → Source: “GitHub Actions”**. Done — every push to `main` auto-builds and deploys (see Actions tab). Your app will be live at `https://<you>.github.io/<repo>/` and works offline after the first visit, like Canva.

### 3. Prepare the Google Sheet (your online master)
Use the sheet: https://docs.google.com/spreadsheets/d/1ZH3IKNqQYo9t18amuDu6FAOwkTxLwSZ1VHYxfez6pcY/edit

1. Create / rename **5 tabs** exactly as (names are editable in-app too):
   `Bicycle Tyres`, `Motorbike Tyres`, `Three-Wheeler Tyres`, `Car Van Tyres`, `Truck Heavy Tyres`
2. Put this **header row** in row 1 of every tab:
   `Item ID, Brand, Size / Pattern, Cost Price, Selling Price, Stock Qty, Barcode, Low Stock At`
3. **Share → Anyone with the link → Viewer.**
4. Open the app → green **Google Sheet Sync** button → paste your sheet link → per tab use **Copy starter rows** and paste into the matching tab → then **Pull all sheets**.

From then on: the app pulls prices/stock from the sheet, keeps selling offline (local device storage), and you push updated stock back anytime with **Copy current data / Download CSV** per tab.

## Local development
```bash
npm install
npm run dev        # preview app on :3000
```

## Manual static build (alternative to Actions)
```bash
STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/<repo> npm run build
# deploy the ./out folder to any static host
```

## What’s inside
- **Dashboard** — revenue/profit/stock stats, 30-day chart, category breakdown, top sellers, low-stock alerts, recent bills.
- **Inventory** — Google-Sheet-style tabs with inline editing, add/delete, margin %, low-stock warnings.
- **Scanner Hub** — live camera barcode/QR scan, scan-from-photo, manual entry, supplier-bill parser & restocker.
- **POS Billing** — cart, discount/tax, cash change, offline stock deduction, printable 80 mm thermal receipt.
- **Contacts** — customers with vehicle history & lifetime value, supplier directory.
- **Offline PWA** — service-worker app shell + localStorage data; installable on phones via “Add to Home Screen”.

## Notes
- Data lives in the browser (localStorage) and syncs from the Google Sheet on demand/auto. Use **Factory reset** in the sync panel to restore demo data.
- Google does not allow anonymous **writes** to Sheets from static sites — that’s why pushes back are done via one-tap CSV copy/download into the tab.
- Everything is client-side: nothing secret, safe to publish publicly.
