'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const COOKIE_NAME = 'poehali_cookie_consent';
const COOKIE_VERSION = '1.0';

export default function CookieBanner({}) {
    function setCookies(cookies, days = 365) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    const expiresStr = 'expires=' + expires.toUTCString();

    for (const [name, value] of Object.entries(cookies)) {
        document.cookie = `${name}=${encodeURIComponent(value)}; ${expiresStr}; path=/; SameSite=Lax`;
    }
    }

    function deleteCookies(names) {
    for (const name of names) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
    }
    }

    function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
    return null;
    }

    // Генерация ID согласия на клиенте
    function generateConsentId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    // fallback для старых браузеров
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
    }

    const [cookieShow, setCookieShow] = useState(false);

    function acceptCookies(analyticsStatus) {
    const consentId = generateConsentId();

    setCookies({
        consent_id: consentId,
        analytics: analyticsStatus ? 'true' : 'false',
        necessary: 'true',
        policy_version: COOKIE_VERSION,
    }, 365);

    setCookieShow(false);
    window.dispatchEvent(new Event('cookie-consent-changed'));
    }

    function checkCookies() {
        const consentId = getCookie('consent_id');
        const analytics = getCookie('analytics');
        const necessary = getCookie('necessary');
        const policyVersion = getCookie('policy_version');

        const isValid =
            typeof consentId === 'string' &&
            consentId.trim() !== '' &&
            necessary === 'true' &&
            policyVersion === COOKIE_VERSION;

        if (!isValid) {
            deleteCookies(['consent_id', 'analytics', 'necessary', 'policy_version']);
            setCookieShow(true);
            return;
        }

        setCookieShow(false);
        window.dispatchEvent(new Event('cookie-consent-changed'));
    }

    useEffect(() => {
        checkCookies();
    }, []);
    if(cookieShow){
        return (
            <div
            role="dialog"
            aria-label="Настройки файлов cookie"
            aria-live="polite"
            className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-5xl"
            >
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl md:p-6">

                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div className="flex-1">
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                    Использование файлов cookie
                    </h2>

                    <p className="text-sm leading-6 text-gray-600">
                    Мы используем необходимые файлы cookie для правильной работы сайта. С вашего согласия также могут
                    использоваться аналитические cookie для анализа
                    посещаемости.
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                    Подробнее смотрите в{' '}
                    <Link
                        href="/cookiePolicy"
                        className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700"
                    >
                        Политике использования cookie
                    </Link>
                    .
                    </p>
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">

                    <button
                    type="button"
                    onClick={()=>{acceptCookies(false)}}
                    className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer"
                    >
                    Отклонить
                    </button>

                    <button
                        type="button"
                        onClick={()=>{acceptCookies(true)}}
                        className="rounded-xl bg-[#144144] px-5 py-3 text-sm font-medium text-white transition active:scale-[0.98] cursor-pointer"
                    >
                    Принять
                    </button>

                </div>

                </div>
            </div>
            </div>
        );
    }
}