# Environment Variables Setup Guide

## Current CORS Error Fix

Based on the error message, your Nhost project details are:
- Subdomain: `ulyygehdmpehutwbdrls`
- Region: `ap-south-1`

## Step 1: Create/Update .env file

Create a `.env` file in the root directory with these exact values:

```env
# Nhost Configuration
VITE_NHOST_SUBDOMAIN=ulyygehdmpehutwbdrls
VITE_NHOST_REGION=ap-south-1

# Hasura Configuration (automatically configured by Nhost)
VITE_HASURA_GRAPHQL_URL=https://ulyygehdmpehutwbdrls.hasura.ap-south-1.nhost.run/v1/graphql

# n8n Webhook URL (optional - can be left empty for now)
VITE_N8N_WEBHOOK_URL=

# Application Configuration
VITE_APP_NAME=Chatbot App
VITE_APP_VERSION=1.0.0
```

## Step 2: Verify Nhost Project Status

1. Go to [Nhost Console](https://app.nhost.io)
2. Make sure your project `ulyygehdmpehutwbdrls` is:
   - ✅ Running (not paused)
   - ✅ In the correct region (ap-south-1)
   - ✅ Has Auth enabled

## Step 3: Check Nhost Auth Settings

In your Nhost project dashboard:
1. Go to **Auth** → **Settings**
2. Under **"Allowed redirect URLs"**, add:
   - `http://localhost:5173`
   - `http://localhost:5173/auth/callback`
   - Your production domain (if deploying)

## Step 4: Restart Development Server

After updating the .env file:
```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

## Common CORS Issues & Solutions

### Issue 1: Project is Paused
- **Solution**: Go to Nhost Console and resume your project

### Issue 2: Wrong Region
- **Solution**: Verify the region in Nhost Console matches your .env file

### Issue 3: Auth Not Enabled
- **Solution**: In Nhost Console, go to Auth and make sure it's enabled

### Issue 4: Missing Redirect URLs
- **Solution**: Add your local development URL to allowed redirects

## Verification Steps

1. Check browser console for any other errors
2. Verify network tab shows requests going to correct URLs
3. Test signup with a valid email format
4. Check Nhost Console logs for any backend errors
