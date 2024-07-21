import Link from 'next/link'
import { tv } from 'tailwind-variants';

const button = tv({
    base: "relative px-6 flex items-center w-max before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95",
    variants: {
      color: {
        primary: "before:bg-primary text-white dark:text-gray-900",
        secondary: "dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800",
      },
      size: {
        sm: "h-9",
        md: "h-11"
      },
    }
  });


export default function BtnLink(props:{ text:string, href:string, variant:"primary"|"secondary", size:"md"|"sm", className?:string }) {
    const { text, href, variant, size, className } = props
  return (
    <Link href={href} className={
        `
        ${button({ size: size, color: variant })}
        ${className !== "" ? className : ""}
        `
    }>
        <span className='relative text-base font-semibold'>
            {text}
        </span>
    </Link>
  )
}