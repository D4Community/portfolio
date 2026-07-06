# Portfolio Template

A modern, ready-to-use **Portfolio Template** built with Next.js, TypeScript, and Tailwind CSS. This project is created by **D4 Community** for anyone who wants a clean, professional portfolio website without starting from scratch.

**Live Demo:** [portfolio-template.d4community.com](https://portfolio-template.d4community.com)

---

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI
- **Content:** Content Collections (MDX)
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React
- **AI Integration:** AI SDK (Google, Groq)

---

## Project Structure

```
portfolio/
├── .content-collections/    # Auto-generated content collection files
├── .next/                   # Next.js build output
├── content/                 # Your MDX content (projects, blogs, etc.)
├── node_modules/
├── public/                  # Static assets (images, favicon, etc.)
├── src/                     # Main source code
│   └── data
|       └── portfolio.ts    # Your personal/portfolio data goes here
├── .eslintrc.json
├── .gitignore
├── components.json
├── content-collections.ts
├── eslint.config.mjs
├── github_metadata.md
├── LICENSE
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## Requirements

- Node.js `>= 18.0.0`
- npm (comes with Node.js)
- Git

---

## How to Fork and Use (For D4 Family Members)

Anyone from D4 Community can fork this project and create their own portfolio. Follow these steps:

### 1. Fork the Repository

1. Go to [https://github.com/D4Community/portfolio](https://github.com/D4Community/portfolio)
2. Click the **Fork** button (top right corner)
3. This will create a copy of this repo under your own GitHub account

### 2. Rename Your Fork (Recommended)

After forking, go to your forked repo:

- Click on **Settings** (in your forked repo)
- Under **Repository name**, change it to something like:
  `your-name-portfolio` (e.g. `ayush-portfolio`)
- Click **Rename**

### 3. Clone Your Fork Locally

```bash
git clone https://github.com/your-username/your-name-portfolio.git
cd your-name-portfolio
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Project Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

---

## How to Update Your Data

All your personal information (name, about, skills, projects, social links, etc.) is managed in:

```
src/data/portfolio.ts
```

Open this file and update the fields with your own details, such as your name, bio, skills, work experience, projects, and contact/social links.

If you want to add blog posts or project write-ups using MDX, add your `.mdx` files inside the `content/` folder.

After making changes, run the project locally (`npm run dev`) to preview before deploying.

---

## Available Scripts

| Command            | Description                          |
|--------------------|----------------------------------------|
| `npm run dev`      | Run the project in development mode  |
| `npm run build`    | Build the project for production     |
| `npm run start`    | Start the production build           |
| `npm run lint`     | Check code for lint errors           |
| `npm run lint:fix` | Auto-fix lint errors                 |

---

## How to Deploy

You can deploy your portfolio for free using **Vercel** or **Netlify**.

### Deploy on Vercel (Recommended for Next.js)

1. Go to [https://vercel.com](https://vercel.com) and sign up/login (use GitHub login)
2. Click **New Project**
3. Import your forked GitHub repository
4. Vercel will auto-detect it as a Next.js project
5. Click **Deploy**
6. Your portfolio will be live on a `.vercel.app` URL

### Deploy on Netlify

1. Go to [https://netlify.com](https://netlify.com) and sign up/login (use GitHub login)
2. Click **Add new site → Import an existing project**
3. Select your forked GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.next` (or follow Netlify's Next.js runtime instructions)
6. Click **Deploy site**

---

## Free Domain from D4 Community (Only for Team D4)

If you don't have your own domain, D4 Community will help provide a **free subdomain** for your portfolio (like `yourname.d4community.com`).

To request this, reach out to the D4 Tech team after your portfolio is deployed.

---

## Need Help?

If you face any issue while setting up, updating data, or deploying, feel free to reach out to the D4 Tech team. We are happy to help.

---

## Feedback & Contribution

- **Feedback:** If you have any suggestions or feedback, you are most welcome to share it with the team.
- **Add New Components/Features:** If you want to add extra components or features, fork the repo and make your changes. You can also raise a Pull Request if you'd like to contribute back to the original template.

---

## License

This project is open-sourced under the license mentioned in the [LICENSE](./LICENSE) file.

---

Made with ❤️ by [**D4 Community**](https://www.d4community.com)
