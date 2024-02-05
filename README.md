# Multi Purpose Next App

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- This application is built using `Next.js`, `Typescript`, `Tailwind CSS`, `Vercel`, `Vitest` stacks.

## Installation

1. Clone the repo and `cd` into it
1. your Node version to be >= 16
1. `pnpm install`
1. `pnpm dev`
1. Visit `localhost:3000`
1. This app has been deployed into Vercel. `https://mutipurpose-next-ts-app.vercel.app`

## CSR vs SSR

### Server-Side Rendering (SSR):

- The server generates the HTML page, including content and styling, and sends it to the Client browser.
- Benefits: SEO-friendly, Fast initial load, works well even JavaScript disbaled.

### Client-Side Rendering (CSR):

- The server sends a minimal HTML page with JavaScript code. The browser downloads and executes the code, which then dynamically builds the page content.
- Benefits: Highly interactive UIs, faster rendering than SSR, Simple development approach.

## App Improvements:
- App to be used with Global State Management for global data.
- App to be improved with unit and e2e tests.
- To be added with env file and translations support. 
- To be added with more interactive Tailwind components. 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
