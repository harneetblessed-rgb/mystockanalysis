# Terminal Analyzer — PWA (No Emulator Needed)

Install this directly on your Android phone in under 5 minutes — no Android Studio, no emulator, no Play Store.

---

## Step 1 — Create a GitHub account (free)

Go to **github.com** → Sign up (takes 2 minutes).

---

## Step 2 — Create a new repository

1. On GitHub, click the **+** button → **New repository**
2. Name it **terminal-analyzer** (any name works)
3. Set it to **Public**
4. Click **Create repository**

---

## Step 3 — Upload these files

On your new repo page, click **uploading an existing file**:
- Drag and drop ALL files from this folder:
  - `index.html`
  - `intraday.html`
  - `swing.html`
  - `manifest.json`
  - `sw.js`
  - The entire `icons/` folder
  - The entire `.github/` folder

Click **Commit changes**.

---

## Step 4 — Enable GitHub Pages

1. In your repo, go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. The deployment workflow runs automatically
4. After ~30 seconds, you'll see:  
   > **Your site is live at `https://YOUR-USERNAME.github.io/terminal-analyzer/`**

---

## Step 5 — Install on your Android phone

1. Open **Chrome** on your Android phone
2. Navigate to `https://YOUR-USERNAME.github.io/terminal-analyzer/`
3. Tap the **⋮ menu** (three dots, top-right)
4. Tap **"Add to Home screen"**
5. Tap **Add**

The app icon now appears on your home screen — tap it and it opens full-screen, exactly like a native app.

---

## What you get

- **Intraday tab** — 5-min VWAP, Supertrend, RSI, MACD, Stochastic, CCI, Bollinger, ADX/DI, all 3 pivot systems (Classic · Woodie · Camarilla), SL1/2/3, T1/T2/T3, S1/2/3, R1/2/3
- **Swing tab** — Fundamentals (P/E, ROE, D/E, margins, growth) + daily technicals, composite BUY/SELL signal
- Works for **NSE** (`.NS`), **BSE** (`.BO`), and **US** tickers
- Loads from cache instantly even on slow connections
- App shell works offline (live data requires internet)

---

## Ticker format

| Market | Format | Example |
|--------|--------|---------|
| NSE    | SYMBOL.NS | `RELIANCE.NS`, `TCS.NS` |
| BSE    | SYMBOL.BO | `HDFCBANK.BO` |
| US     | SYMBOL    | `AAPL`, `NVDA` |
| Index  | ^INDEX    | `^NSEI`, `^BSESN` |

---

## On iOS (iPhone/iPad)

1. Open in **Safari** (must be Safari for PWA install on iOS)
2. Tap the **Share** button (box with arrow pointing up)
3. Tap **"Add to Home Screen"**
4. Tap **Add**

---

## Updating the app

Just edit any HTML file and push to GitHub — the site redeploys automatically in ~30 seconds.

---

*Disclaimer: Educational/research use only. Not financial advice. Consult a SEBI-registered advisor before trading.*
