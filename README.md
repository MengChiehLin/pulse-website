# PULSE Business Website

This is the official website for PULSE - Critical Business News Alerts app.

## Purpose

This website serves as the business presence required for Stripe account setup and provides information about our mobile news alert service.

## Deployment

The website can be deployed to GitHub Pages:

1. Create a new GitHub repository named `pulse-news-website`
2. Push this code to the repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/pulse-news-website.git
   git add .
   git commit -m "Initial website for PULSE news app"
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Set Source to "Deploy from a branch" and select "main" branch, "/" (root) folder
5. Your website will be available at: `https://YOUR_USERNAME.github.io/pulse-news-website`

## Alternative Deployment Options

### Netlify
1. Create account at netlify.com
2. Drag and drop the website folder
3. Get instant deployment with custom domain support

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the website directory
3. Follow the prompts for deployment

## Local Development

To view the website locally:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Then open http://localhost:8000
```

## For Stripe Setup

Use the deployed URL as your business website when completing Stripe onboarding.