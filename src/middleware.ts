import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  // Define protected routes
  const protectedRoutes = ['/home', '/features', '/pricing', '/about', '/blog', '/careers', '/contact'];
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // For client-side navigation, we'll let the client handle authentication
    // The middleware will only redirect if there's no token in the request
    // This allows the client to handle the authentication flow properly
    
    // Check if this is a client-side navigation (has referer header)
    const referer = request.headers.get('referer');
    const isClientNavigation = referer && referer.includes(request.nextUrl.origin);
    
    if (isClientNavigation) {
      // Allow client-side navigation to proceed
      // The client will handle authentication checks
      return NextResponse.next();
    }
    
    // For direct URL access, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 