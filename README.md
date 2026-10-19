# Fremwork landing page (Next.js 15, App Router, TypeScript)

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

- Fonts: Geist and Geist Mono via the `geist` package.
- Waitlist: `app/api/waitlist/route.ts` validates the email and logs it. Add your provider (Resend, Loops, Mailchimp, a database) at the TODO.
- Copy lives in `components/`. Brand tokens are CSS variables at the top of `app/globals.css`.
