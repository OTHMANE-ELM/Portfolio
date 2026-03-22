# Portfolio — Othmane El Matlini

Portfolio professionnel React + TypeScript + Tailwind CSS + Vite.

## 🚀 Lancement rapide

```bash
npm install
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173)

## 📦 Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Preview du build prod |
| `npm run lint` | Vérification ESLint |
| `npm run format` | Formatage Prettier |

## 🗂️ Structure

```
src/
├── app/
│   ├── router.tsx        # Routes React Router v6
│   └── RootLayout.tsx    # Header + Footer global
├── data/
│   ├── profile.ts        # Infos personnelles
│   ├── projects.ts       # Projets
│   ├── education.ts      # Formations
│   ├── experience.ts     # Expérience pro
│   └── certifications.ts # Certifications
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   └── Contact.tsx
├── components/
│   └── CertificationCard.tsx
├── index.css             # Tailwind + styles globaux
└── main.tsx
public/
└── certs/
    └── hibernate-jpa.svg  # Badge certification
```

## 🛠️ Stack

- **React 18** + **TypeScript**
- **Vite** — build ultra-rapide
- **Tailwind CSS** — styling utility-first
- **React Router v6** — navigation SPA
- **react-helmet-async** — SEO par page
- **clsx** — classes conditionnelles
- **framer-motion** — animations (optionnel)

## 🚢 Déploiement Vercel

1. Push sur GitHub
2. Importe le repo sur [vercel.com](https://vercel.com)
3. Framework preset : **Vite**
4. Build command : `npm run build`
5. Output directory : `dist`

## ✏️ Personnalisation

Toutes les données sont centralisées dans `src/data/` :
- Modifie `profile.ts` pour tes infos personnelles
- Ajoute des projets dans `projects.ts`
- Ajoute des certifications dans `certifications.ts`
- Place les badges WebP/SVG dans `public/certs/`
