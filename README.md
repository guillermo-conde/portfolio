This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Setup

This project includes a contact form that sends emails using [Resend](https://resend.com). To set up email functionality:

1. Create a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory with:

   ```
   # Server-side only (API routes - secure)
   RESEND_API_KEY=your_resend_api_key_here
   RESEND_DOMAIN=your-verified-domain.com
   EMAIL_TO=your-email@example.com

   # Client-side accessible (public)
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
   NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
   ```

4. For production, verify your domain in Resend and update the `RESEND_DOMAIN` variable

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
