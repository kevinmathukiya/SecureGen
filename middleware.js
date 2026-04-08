import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host')?.toLowerCase();
  const forwardedProto = request.headers.get('x-forwarded-proto')?.toLowerCase();
  const isHttp = forwardedProto === 'http' || url.protocol === 'http:';
  const isWww = host?.startsWith('www.');

  if (isHttp || isWww) {
    url.protocol = 'https:';
    url.host = 'passwordgens.online';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
