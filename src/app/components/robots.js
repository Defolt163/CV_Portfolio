const BASE_URL = 'https://romanov-dev.ru';

export const dynamic = 'force-static';
export const revalidate = false;

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/'
                ],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}