import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import { HeaderProvider } from "./context/HeaderContext";
import "./globals.css";
import YandexMetrika from "./components/YandexMetrika/YandexMetrika";
import CookieBanner from "./components/CookieNotification/CookieNotification";


export const metadata = {
    metadataBase: new URL("https://romanov-dev.ru"),

    title: {
        default: "Романов Михаил — WEB-разработчик",
        template: "%s | Романов Михаил",
    },

    description:
        "Портфолио. Избранные проекты, опыт разработки сайтов и веб-приложений, навыки и подход к созданию цифровых продуктов.",

    openGraph: {
        title: "Романов Михаил — WEB-разработчик",
        description:
            "Избранные проекты, опыт и подход к созданию современных веб-приложений.",
        url: "/",
        siteName: "Романов Михаил — Портфолио",
        locale: "ru_RU",
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Михаил Романов — WEB-разработчик",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Романов Михаил — WEB-разработчик",
        description:
            "Портфолио, избранные проекты и опыт веб-разработки.",
        images: ["/opengraph-image.jpg"],
    },

    icons: {
        icon: [
            {
                url: "/favicon/favicon-96x96.png",
                type: "image/png",
                sizes: "96x96",
            },
            {
                url: "/favicon/favicon.svg",
                type: "image/svg+xml",
            },
        ],
        shortcut: "/favicon/favicon.ico",
        apple: [
            {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },

    manifest: "/favicon/site.webmanifest",

    appleWebApp: {
        capable: true,
        title: "WEB DEV",
        statusBarStyle: "default",
    },
};

export default function RootLayout({ children }) {
    return (
        <html
        lang="en"
        className={`h-full antialiased overflow-x-hidden`}
        >
            <body className="relative min-h-full flex flex-col items-center">
                <CookieBanner/>
                <HeaderProvider>
                    <Header className='fixed top-0 left-0 w-full z-50'/>
                    <div className="container">
                    {children}
                    </div>
                    <Footer/>
                </HeaderProvider>
                <Suspense fallback={null}>
                    <YandexMetrika />
                </Suspense>
            </body>
        </html>
    );
}
