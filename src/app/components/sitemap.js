const BASE_URL = 'https://romanov-dev.ru';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap() {
    return [
        {
            url: BASE_URL,
            lastModified: '2026-10-01',
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}#portfolioBlock`,
            lastModified: '2026-10-01',
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}#storyBlock`,
            lastModified: '2026-10-01',
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}#aboutBlock`,
            lastModified: '2026-10-01',
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/policy`,
            lastModified: '2026-10-01',
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/cookiePolicy`,
            lastModified: '2026-10-01',
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];
}