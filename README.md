# Anirudh's Matchday

Chore and homework tracker for Anirudh, with his school timetable, lunch menu and important dates, with a Real Madrid / Ronaldo fan theme. Anirudh marks tasks done on his iPad, a parent approves them, and he earns goals to swap for rewards.

Open the GitHub Pages link in Safari, tap Share, then **Add to Home Screen**. Progress syncs between devices through Firebase; after the first open the app also loads without signal.

## One-time Firebase setup (about 10 minutes)

1. Go to <https://console.firebase.google.com>, click **Create a project**, name it `anirudh-matchday`. Google Analytics is not needed.
2. **Build → Authentication → Get started → Email/Password → Enable → Save.**
3. Authentication → **Users → Add user**: create one login each for Abhishek, Aparna and Anirudh (an email + password; Anirudh's can be any address you control). Copy each person's **User UID**.
4. Optional: Authentication → **Settings → User actions**: untick **Enable create (sign-up)**.
5. **Build → Firestore Database → Create database**, choose location `eur3 (europe-west)`, start in **production mode**.
6. Firestore → **Rules** tab: paste the contents of `firestore.rules`, replace the three `PASTE_..._UID` values with the User UIDs from step 3, and **Publish**.
7. **Project settings (gear) → Your apps → Web (`</>`)**, nickname `matchday`, no hosting. Copy the `firebaseConfig` values into `firebase-config.js`.
8. **Authentication → Settings → Authorized domains → Add domain**: `abhishekshroffberlin.github.io`.

9. **File uploads (Files tab):** switch the project to the **Blaze** plan (gear → Usage and billing → Details & settings → Modify plan), set a small budget alert, then **Build → Storage → Get started** (production mode). In Storage → **Rules**, paste `storage.rules` unchanged, **Publish**, and click **Grant access** when asked to let Storage rules read Firestore.

The Firebase config values are not secret; the data is protected by the sign-in and the rules, which only admit the three family logins.

## First open on each device

Sign in, then pick who uses that login. Parents choose their name and enter (or create) the 4-digit parent PIN. Anirudh's iPad opens on the SIUUU intro and his view; the **Parents** button plus the PIN opens the referee's desk there.

## Files

`index.html` the app · `school-data.js` timetable and monthly lunch menus (add a new `"YYYY-MM"` month there) · `firebase-config.js` your Firebase settings · `firestore.rules` / `storage.rules` database and file rules to paste into Firebase · `sw.js` offline cache (bump `CACHE` when you change files) · `manifest.webmanifest` + icons for Add to Home Screen.

A fan theme, not an official Ronaldo or Real Madrid product.
