import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['ru', 'ua'],
  defaultLocale: 'ru'
});
 
export const config = {
  matcher: ['/', '/(ru|ua)/:path*']
};