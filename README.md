# Nuxt 3 - Tailwind CSS - PrimeVue Minimal Starter
## Configure
Configuration was somewhat tricky.
Used various references as below:
- [github primevue-examples](https://github.com/primefaces/primevue-examples/tree/main)
- [github primevue-tailwind](https://github.com/primefaces/primevue-tailwind/releases)

## Installing PrimeVue with Nuxt
Follow the instructions of [PrimeVue site](https://primevue.org/nuxt)

## From nuxt_tailwind repo main branch
### Basic light-dark-mode 
- Implement dark:text- and dark:bg- for dark mode colors for existing pages using dark: prefix

### Implement basic-route
- Addition of layouts folder with default.vue (include navigation)
- Addition of pages folder with index.vue and about.vue

### Tailwind CSS installation
- Tailwind CSS installed according to [the guide](https://tailwindcss.com/docs/guides/nuxtjs)
- Cleaned up starting pages without any routes yet

### Initial setup
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
