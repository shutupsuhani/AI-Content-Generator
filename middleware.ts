import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected route matcher
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/']);

export default clerkMiddleware(async (auth, req) => {
  try {
    if (isProtectedRoute(req)) {
      await auth.protect(); 
    }
  } catch (error) {
    console.error("Authentication error in middleware:", error);
  }
});

// Middleware configuration
export const config = {
  matcher: [
    // Exclude static files and Next.js internals
    '/',
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)', '/(api|trpc)(.*)',
  ],
}; 

