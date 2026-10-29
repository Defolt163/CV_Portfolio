'use client';
import Link from "next/link";
import { useHeader } from "../context/HeaderContext";

export default function Header({className = ''}){
    const { scrollProgress } = useHeader();
    return(
        <div style={{
                backgroundColor: `rgba(20, 65, 68, ${scrollProgress})`, color: `rgb(${255 * scrollProgress}, ${255 * scrollProgress}, ${255 * scrollProgress})`,
            }} className={`${className} flex flex-col items-center`}>
            <ul className={`max-sm:text-base max-lg:pl-0 max-lg:justify-center container flex text-2xl transition-colors pl-32 items-center py-2`}>
                <li><Link className="p-2" href={"#"}>История</Link></li>
                <li className="p-2 mx-2"><Link href={"#"}>Портфолио</Link></li>
                <li><Link className="p-2" href={"#"}>Обо мне</Link></li>
            </ul>
        </div>
    )
}