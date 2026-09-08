# Hoolah Tools

Fast, simple and powerful tools for everyone.

**Hoolah Tools** is the first product of the Hoolah ecosystem — a free web platform with useful online tools for developers, IT specialists, and users.

## Features

- 🚀 Fast and lightweight
- 📱 Mobile-first design
- 🔒 Local processing (no data sent to server)
- 🎨 Modern, minimalist interface
- ♿ Accessible and inclusive

## Tools (MVP)

1. **JSON Formatter** - Format, minify, and validate JSON
2. **JWT Decoder** - Decode JWT tokens
3. **UUID Generator** - Generate UUIDs
4. **Base64 Encoder/Decoder** - Encode and decode Base64
5. **URL Encoder/Decoder** - Encode and decode URLs
6. **Timestamp Converter** - Convert between timestamps and dates
7. **Hash Generator** - Generate SHA-256, SHA-512, etc.
8. **Regex Tester** - Test regular expressions

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
hoolah/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── tools/            # Tool logic
│   ├── contexts/         # React contexts
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript types
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Architecture

Hoolah Tools is built with:
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Deployment

The project is configured for GitHub Pages deployment.

```bash
npm run deploy
```

## Brand

- **Primary Color:** Purple (#a855f7)
- **Philosophy:** 66 = Innovation & Infrastructure
- **Vision:** Simple, fast, and powerful tools for everyone

## License

MIT

---

**Created with ❤️ by the Hoolah team**
