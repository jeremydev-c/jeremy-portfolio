# Email Setup Guide

Your contact form is now configured to send emails directly to **nduatijeremy7@gmail.com** using Resend.

## Setup Steps

### 1. Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Navigate to **API Keys** in your dashboard
4. Create a new API key
5. Copy the API key

### 2. Add API Key to Environment Variables

Create a `.env.local` file in the root of your portfolio directory:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit `.env.local` to git! It's already in `.gitignore`.

### 3. Verify Your Domain (Optional but Recommended)

For production, you should verify your domain with Resend:

1. Go to **Domains** in Resend dashboard
2. Add your domain (e.g., `modenova.co.ke`)
3. Add the DNS records provided by Resend
4. Update the `from` field in `app/api/contact/route.ts`:
   ```typescript
   from: 'Portfolio Contact <contact@modenova.co.ke>',
   ```

For now, you can use `onboarding@resend.dev` for testing (limited to 100 emails/day).

### 4. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email inbox at **nduatijeremy7@gmail.com**

## How It Works

- When users submit the contact form, it sends a POST request to `/api/contact`
- The API route validates the data and sends an email via Resend
- The email includes:
  - Sender's name and email
  - Subject line
  - Full message
  - Reply-to is set to the sender's email (so you can reply directly)

## Troubleshooting

- **"Failed to send email"**: Check that your `RESEND_API_KEY` is set correctly
- **Emails not arriving**: Check spam folder, verify API key is active
- **Rate limit errors**: Free tier allows 100 emails/day

## Production Deployment

When deploying to Vercel/Netlify:

1. Add `RESEND_API_KEY` to your environment variables in the platform dashboard
2. Redeploy your application
3. Test the contact form on the live site

