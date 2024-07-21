import Link from 'next/link'
export default function Navitem(props:{text:string, href:string}) {

    const { text, href } = props
    return (
        <li>
            <Link href={href} className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
                <span>
                    {text}
                </span>
            </Link>
        </li>
    )
}