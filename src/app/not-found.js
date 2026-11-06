import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <div className='content_404'>
      <h1 className='text-xl max-sm:text-base text-center'>Такой страницы здесь не существует</h1>
      <Link className='font-semibold mt-4 max-sm:px-4 max-sm:py-4 sm:max-lg:px-8 sm:max-lg:py-4 max-lg:text-base text-xl px-6 py-4 cursor-pointer bg-[#FFE8E8] w-max hover:shadow-xl hover:ease-in-out hover:duration-300 duration-300' href={'/'}>На главную</Link>
    </div>
  )
}