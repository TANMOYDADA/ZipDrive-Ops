# ZipDrive Ops — Driver Management Dashboard

A live driver management dashboard with real-time map tracking, built with React.

## Features
- Live map with animated driver positions (updates every 2.5s)
- Driver list with search and status filtering
- Driver detail panel with status management
- Stats overview (active, in-ride, total rides, revenue)

## Local Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel via GitHub

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: ZipDrive Ops dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zipdrive-ops.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import your `zipdrive-ops` repository
4. Vercel auto-detects Create React App — leave all settings as default
5. Click **Deploy**

Your app will be live at `https://zipdrive-ops.vercel.app` (or similar).

### Step 3 — Auto-deploy on push

Every `git push` to `main` triggers a new Vercel deployment automatically.

## Project Structure

```
src/
  components/
    App.jsx              # Root layout
    Topbar.jsx           # Header bar
    Sidebar.jsx          # Stats + driver list panel
    DriverList.jsx       # Searchable, filterable list
    DriverAvatar.jsx     # Initials avatar
    StatusPill.jsx       # Status badge
    LiveMap.jsx          # SVG map with driver markers
    DriverDetailPanel.jsx# Click-to-expand driver info
  data/
    drivers.js           # Seed data + constants
  hooks/
    useDrivers.js        # Live position simulation + state
```
