# nextjs-template

This is template repository to use Nextjs and React.js.
This repository uses libraries below.

- Next.js
- React.js
  - Rreact Context API
  - React Hooks
- TypeScript
- Ant Design
- ESLint

# Development

Run below commands.
This Docker image is able to use hot reload feature if you change some files.

```
docker build . -t next-template
docker run -v $(pwd):/app -p 3000:3000 next-template
```

# Production

Use Next.js production build.

```
NODE_ENV="production" yarn next build
yarn next start
```
