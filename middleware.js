import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host')?.toLowerCase();
  const forwardedProto = request.headers.get('x-forwarded-proto')?.toLowerCase();
  const canonicalUrl = new URL(siteConfig.url);
  const canonicalHost = canonicalUrl.host.toLowerCase();

  if (!host) return NextResponse.next();

  const isWrongHost = host !== canonicalHost && host !== `www.${canonicalHost}`;
  const isWww = host === `www.${canonicalHost}`;
  const isHttp = forwardedProto === 'http';

  if (!isWrongHost && !isWww && !isHttp) {
    return NextResponse.next();
  }

  url.protocol = canonicalUrl.protocol;
  url.host = canonicalHost;

  // Final safety check: if the URL hasn't changed, don't redirect (prevents loops)
  if (url.toString() === request.url) {
    return NextResponse.next();
  }

  return NextResponse.redirect(url, 301);
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
