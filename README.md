# 🛡️ Sol Tactics

**Sol Tactics** is a turn-based, tactical PvP strategy game set in a vibrant sci-fi-meets-medieval world. Built entirely in web technologies, it runs in both the browser and as a downloadable desktop app via Tauri.

## 📁 Monorepo Structure

This project uses [Turborepo](https://turbo.build/) to manage shared code and apps:

```
sol-tactics/
├── apps/
│   ├── web/         # Vite + React + Phaser frontend
│   └── desktop/     # Tauri app wrapping the web build
├── packages/
│   ├── game-client/  # Phaser game client
│   └── game-state/   # Game logic, state machines, type definitions
├── turbo.json       # Turborepo config
└── README.md
```

## 🧠 Tech Stack

- **Frontend**: React + Vite
- **Game Board**: Phaser (2D tactical grid engine)
- **State Management**: Zustand
- **Routing**: React Router
- **Desktop App**: Tauri (Rust + WebView)
- **Monorepo**: Turborepo

## 🚀 Getting Started

### Install Dependencies

```bash
pnpm install

# Start Web App (dev)
pnpm --filter web dev

# Start Desktop App (dev)
pnpm --filter desktop dev
```

🔥 Ensure the web server (http://localhost:5173) is running before launching the desktop app.

🛠️ Building for Production

Build web

```bash
pnpm --filter web build
```

Build desktop

```bash
pnpm --filter desktop build
```

Tauri will package the web/dist folder into a native binary.

🌐 Deploying Web

```bash
pnpm --filter web build
```

Then deploy web/dist to Vercel, Netlify, or your preferred host

## Roadmap

### 🎯 Hackathon MVP Scope

- Offline match (same-device)
- Full pre-match flow (ban → pick → placement)
- Turn-based movement, basic attacks, abilities
- No equipment, no persistent storage
- Winner decided by unit elimination

### 📍 Roadmap (Post-MVP)

- Online matchmaking
- Gear and cosmetic system
- SPL-based wagering and rewards
- Replay viewer and seasonal ladders
