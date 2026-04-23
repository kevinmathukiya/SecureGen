import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host')?.toLowerCase();
  const forwardedProto = request.headers.get('x-forwarded-proto')?.toLowerCase();
  
  if (!host) return NextResponse.next();

  // Dynamic canonical host (removes www. if present)
  const canonicalHost = host.startsWith('www.') ? host.substring(4) : host;
  const isWww = host.startsWith('www.');
  
  // Only redirect to HTTPS if we are explicitly told the request is HTTP.
  const isHttp = forwardedProto === 'http';

  // If we are already on the non-WWW host and it's not explicitly HTTP, proceed.
  // This is the primary guard against infinite redirect loops.
  if (!isWww && !isHttp) {
    return NextResponse.next();
  }

  // If we are on 'www' or 'http', redirect to the canonical HTTPS version.
  if (isWww || isHttp) {
    url.protocol = 'https:';
    url.host = canonicalHost;
    
    // Final safety check: if the URL hasn't changed, don't redirect (prevents loops)
    if (url.toString() === request.url) {
      return NextResponse.next();
    }
    
    return NextResponse.redirect(url, 301);
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
     * - .svg, .png, .jpg, .jpeg, .gif, .webp (images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
