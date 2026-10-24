Kas TKJT 1 — Class Cash Information System
A web application for managing and viewing class cash information for Class X TKJT 1. The interface includes student and treasurer login flows and pages for class-cash administration.
Project Files
- index.html — Main HTML entry point and frontend configuration.
- script.js — Application logic, authentication flows, and page interactions. Keep the existing working version when applying a visual-only update.
- style.css — Layout, colors, responsive styles, and login-page appearance.
- login-left.jpg — Class photo used as the login-page background.
Login Background Update
The latest visual update places the class photo across the full login screen, with a translucent appearance behind the login form and without a blurred outer edge.

To apply only this visual update to an existing GitHub repository:
1. Replace index.html with the updated version.
2. Replace style.css with the updated version.
3. Upload login-left.jpg to the repository root, alongside index.html.
4. Do not replace script.js when applying this visual-only patch; the patch does not require changes to the application's login logic.
5. Commit the changes and wait for Vercel to finish deploying.
6. Open the deployed site and hard-refresh the browser (Ctrl + F5) to load the latest CSS.
The image path is relative: login-left.jpg. Keep the image in the same root directory as index.html unless you also update the path in the stylesheet.
Supabase Configuration
The application uses the Supabase JavaScript client loaded from jsDelivr. The Supabase project URL and browser-safe Publishable key are configured in index.html.
- Use only a Supabase Publishable key (or the legacy anon key) in frontend code.
- Never place a service_role key or any secret key in client-side files.
- Authentication and database access depend on the Supabase tables, triggers, and Row Level Security (RLS) policies configured in the project.
- Some application data may still be stored in the browser's localStorage, depending on the feature and current implementation. Do not assume every module automatically syncs with Supabase.
Deploying with GitHub and Vercel
1. Push or commit the project files to the connected GitHub repository.
2. Vercel will deploy the changes if automatic deployments are enabled.
3. Verify the deployment in Vercel before testing the website.
4. If old styling remains visible, hard-refresh the page with Ctrl + F5.
5. If the page fails to load, open the browser Developer Tools console and inspect the first JavaScript error.
Important Notes
- Keep index.html, script.js, style.css, and login-left.jpg in the correct project paths.
- Do not rerun database setup SQL simply to change the login-page design.
- Back up working files before making further changes to authentication or database policies.
