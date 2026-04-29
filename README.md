# datacenterconsulting
The Consultant for Data Center Implementation

## Deployment

This repository now includes a static landing page and Vercel configuration.

To deploy it on Vercel:

1. Log in to the correct Vercel account or team.
2. Import this GitHub repository.
3. Accept the default settings for a static deployment.
4. Deploy to receive the hosted URL.

## Troubleshooting 404 on Vercel

If deployment succeeds but the URL shows 404:

1. Ensure `index.html`, `styles.css`, and `vercel.json` are committed and pushed to `main`.
2. Ensure Vercel project settings use root directory `.`.
3. Trigger redeploy for the latest `main` commit.
