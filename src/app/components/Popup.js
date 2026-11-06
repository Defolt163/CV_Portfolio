"use client";

import Link from "next/link";
import { useState } from "react";

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (loading) return;

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            callType: formData.get("callType"),
            contact: formData.get("contact"),
            question: formData.get("question"),
        };

        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            setStatus("Заявка успешно отправлена!");
            form.reset();

        } catch (error) {
            setStatus(
                error.message || "Ошибка отправки. Попробуйте позже."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="max-sm:px-4 max-sm:py-4 sm:max-lg:px-8 sm:max-lg:py-4 sm:max-lg:text-base text-xl px-12 py-8 cursor-pointer bg-[#FFE8E8] w-max hover:shadow-xl hover:ease-in-out hover:duration-300 duration-300">Связаться</div>

            {/* Попап */}
            {isOpen && (
                <div
                    className="cursor-pointer fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="cursor-auto relative bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-3 text-gray-500 cursor-pointer"
                        >
                            ✕
                        </button>

                        <p className="text-gray-600 max-sm:text-sm">
                            Вы можете связаться со мной через одну из этих соц-сетей:
                        </p>
                        <div className="max-sm:mt-2 flex max-sm:text-sm">
                            <Link className="hover:underline p-2" href={"https://vk.ru/gp.romanov"}>VK</Link>
                            <Link className="hover:underline mx-8 p-2" href={"https://t.me/gp_romanov"}>TG</Link>
                            <Link className="hover:underline p-2" href={"https://max.ru/u/f9LHodD0cOLz2cOHRpdryyw0eZUjVaXzqnl_uJAOiwaoFcxTVSqMI1DdcjU"}>MAX</Link>
                        </div>
                        <div className="flex mt-2 max-sm:text-sm flex-wrap">
                            <p>Email:</p>
                            <Link className="hover:underline ml-2" href={"mailtro:m.romanov.biz@gmail.com"}>m.romanov.biz@gmail.com</Link>
                        </div>
                        <Link className="text-xs mt-4 block underline" href={"/policy"} target="_blank">Ознакомиться с политикой обработки персональных данных</Link>
                    </div>
                </div>
            )}
        </>
    );
}