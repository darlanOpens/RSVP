import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Log the path the server receives to help diagnose proxy issues.
  console.log('Middleware received request for pathname:', request.nextUrl.pathname);
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
} 