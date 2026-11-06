import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-[#979797] w-full flex flex-col items-center py-4">
            <div className="container">
                <div className="max-sm:pb-8 max-sm:px-4 max-lg:flex-col max-lg:items-start relative flex justify-between items-center">
                    <div className="">
                        <h3 className="text-[#6D6D6D]">E M A I L</h3> 
                        <Link className="text-white hover:text-[#FFE8E8] transition-colors delay-90" href={'mailto:m.romanov.biz@gmail.com'}>m.romanov.biz@gmail.com</Link>
                        <h3 className="mt-2 text-[#6D6D6D]">S M M</h3>
                        <div className="flex gap-2">
                            <Link className="text-white hover:text-[#FFE8E8] transition-colors delay-90" href={"https://vk.ru/gp.romanov"}>VK</Link>
                            <Link className="text-white hover:text-[#FFE8E8] transition-colors delay-90" href={"https://t.me/gp_romanov"}>TG</Link>
                            <Link className="text-white hover:text-[#FFE8E8] transition-colors delay-90" href={"https://max.ru/u/f9LHodD0cOLz2cOHRpdryyw0eZUjVaXzqnl_uJAOiwaoFcxTVSqMI1DdcjU"}>MAX</Link>
                        </div>
                    </div>
                    <h2 className="max-sm:text-base max-lg:-right-12 max-lg:bottom-0 max-lg:left-auto absolute left-1/2 -translate-x-1/2 text-2xl text-[#6D6D6D]">GP.ROMANOV</h2>
                    <div className="flex flex-col max-lg:mt-4">
                        <Link className="text-white mb-2 hover:text-[#FFE8E8] transition-colors delay-90" href={'/policy'}>Политика обработки персональных данных</Link>
                        <Link className="text-white hover:text-[#FFE8E8] transition-colors delay-90" href={'/cookiePolicy'}>Уведомление об использовании cookie. </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}