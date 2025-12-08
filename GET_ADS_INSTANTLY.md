# How to Get Ads Displaying INSTANTLY (Right Now)

You want ads to show up **immediately**, without waiting weeks for Google to approve you. 

**The Solution:** Use **Adsterra** or **Monetag**.
**Time required:** ~5 Minutes.

## Step 1: Sign Up (1 Minute)
1.  Go to [Adsterra Sign Up](https://identity.adsterra.com/sign-up?type=publisher).
2.  Choose **"As a Publisher"**.
3.  Fill in your Name and Email.

## Step 2: Add Your Website (1 Minute)
1.  Once logged in, click **"Websites"** -> **"Add New Website"**.
2.  **Website URL:** Enter your deployed App URL (e.g., `https://your-app.vercel.app`).
3.  **Website Category:** Choose **"Education"**.
4.  **Ad Unit:** Choose **"Banner 728x90"** (Classic banner) or **"Social Bar"** (High clicks).
5.  ** IMPORTANT:** Uncheck "Erotic Ads" to keep it safe for students.
6.  Click **"Add"**.

## Step 3: Get the Code (Wait 2-5 Minutes)
1.  Wait about 2-5 minutes. Refresh the page.
2.  Your status will change from "Pending" to **"Approved"**. (This is the "Instant" part!)
3.  Click **"Get Code"**.
4.  Copy the code script they give you.

## Step 4: Put it in Your App (2 Minutes)
1.  Open the file: `components/AdSense/AlternativeAd.tsx`
2.  Paste the script inside the `useEffect` hook (instructions are in the file).
3.  Open `app/page.tsx`.
4.  Import the component:
    ```tsx
    import AlternativeAd from '@/components/AdSense/AlternativeAd';
    ```
5.  Replace `<AdUnit ... />` with `<AlternativeAd />`.

## Step 5: Money
*   Deploy your changes.
*   Ads will start showing immediately.
*   You earn money when people see or click them.

**Why is this instant?**
Google reviews every site manually (slow). Adsterra uses automated bots to check your site (fast).
