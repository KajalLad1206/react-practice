# Soulmate Project

This is a Tailwind CSS-focused React + Vite practical for the Soulmate app. The main goal is to showcase how Tailwind utility classes can be used to build a modern and responsive UI.

## Step-by-Step Setup

1. Create a new Vite React project:
   ```bash
   npm create vite@latest soulmate
   ```

2. Choose React when prompted.

3. Go into the project folder:
   ```bash
   cd soulmate
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Install Tailwind CSS:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

6. Configure Tailwind in your Vite project.

7. Start the development server:
   ```bash
   npm run dev
   ```

8. Open the local URL shown in the terminal, usually:
   ```text
   http://localhost:5173
   ```

9. Build your UI using Tailwind classes in the files inside the `src` folder.

10. Create a production build:
    ```bash
    npm run build
    ```

11. Preview the production build:
    ```bash
    npm run preview
    ```

## Tailwind Focus

- Use utility classes such as `flex`, `grid`, `p-4`, `text-center`, `rounded`, and `shadow`.
- Keep the design responsive with classes like `sm:`, `md:`, and `lg:`.
- Style components directly in JSX for a fast Tailwind workflow.

## Common Commands

- `npm install` - install all project dependencies
- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run preview` - preview the built app
- `npm run lint` - check for linting issues

## Project Structure

- `src/` - main React source files
- `public/` - static files
- `package.json` - project scripts and dependencies

## Screenshot

![Soulmate app preview](src/assets/hero.png)

## Notes

- Press `Ctrl + C` in the terminal to stop the development server.
- Use Tailwind classes freely to create and customize the UI.
