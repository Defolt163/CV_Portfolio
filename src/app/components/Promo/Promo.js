import Link from "next/link";
import Header from "../Header";
import Image from "next/image";
import MyPhoto from '@/../public/images/3EDE3BBB-BC6C-4AAC-B2F8-4402579F94D3_1_105_c.jpeg'

export default function PromoBlock(){
    return(
        <div className="relative before:content-[''] before:absolute before:top-0 before:left-28 before:w-screen before:h-full before:bg-[#F6F6F6] before:z-[-1]">
            <div className="flex justify-around">
                <div className="max-sm:px-4 max-sm:w-full w-[60%] mt-[70px]">
                    <h1 className="max-sm:text-5xl sm:max-lg:text-6xl md:max-xl:text-7xl text-9xl font-bold text-[#999999]">Привет! <span className="max-sm:whitespace-normal whitespace-nowrap">Меня зовут</span> <span className="whitespace-nowrap">Михаил</span></h1>
                    <div className="max-sm:mt-2 flex">
                        <Link href={"https://vk.ru/gp.romanov"}>VK</Link>
                        <Link className="mx-8" href={"https://t.me/gp_romanov"}>TG</Link>
                        <Link href={"https://max.ru/u/f9LHodD0cOLz2cOHRpdryyw0eZUjVaXzqnl_uJAOiwaoFcxTVSqMI1DdcjU"}>MAX</Link>
                    </div>
                </div>
                <Image className="max-sm:hidden w-[40%]" src={MyPhoto} alt="Мое фото" loading="eager"/>
                {/* <div className="w-[50%] bg-gray-500 aspect-9/16 z-0 relative"></div> */}
            </div>
            <div className="max-sm:relative max-sm:flex-col sm:max-lg:-bottom-4 flex absolute -bottom-8 left-0 gap-4">
                <div className="max-sm:px-4 max-sm:py-4 sm:max-lg:px-8 sm:max-lg:py-4 sm:max-lg:text-base text-xl px-12 py-8 cursor-pointer bg-[#FFE8E8] w-max hover:shadow-xl hover:ease-in-out hover:duration-300 duration-300">Скачать резюме</div>
                <div className="max-sm:px-4 max-sm:py-4 sm:max-lg:px-8 sm:max-lg:py-4 sm:max-lg:text-base text-xl px-12 py-8 cursor-pointer bg-[#FFE8E8] w-max hover:shadow-xl hover:ease-in-out hover:duration-300 duration-300">Связаться</div>
            </div>
            
        </div>
    )
}