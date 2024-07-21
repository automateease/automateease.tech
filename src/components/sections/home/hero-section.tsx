import { Container } from '@/components/container/container'
import { ColoredSpan } from '@/components/shared'
import Image from 'next/image'

export default function Herosection(props: {}) {
    return (
        <section className="pt-32 sm:pt-36 md:pt-40 lg:pt-36">
            <Container>
                <div className="text-center">
                    <div className="items-center gap-12 lg:flex">
                        <div className="md:mx-auto md:w-3/4 lg:ml-0 lg:w-1/2">
                            <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl">
                                Build your dream team at

                                <ColoredSpan text='Scales.' />


                            </h1>
                            <p className="mt-12 text-center text-lg text-gray-600 dark:text-gray-300 sm:text-xl lg:text-left">Computers used to be magical. But much of that, and practices that slow teams down and hold great work back.</p>
                            <form className="mt-12">
                                <div className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md dark:border-white/10 dark:bg-dark md:p-2 lg:pr-3">
                                    <div className="py-3 pl-4 lg:pl-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <input autoComplete="email" placeholder="Your mail address" className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 dark:placeholder-white" type="email" />
                                    <div className="md:pr-1.5 lg:pr-0">
                                        <button type="button" title="Start buying" className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
                                            <span className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block"> Get Started </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
                                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Image className="mt-12 md:mx-auto md:w-2/3 lg:mt-0 lg:ml-0 lg:w-1/2" src="/images/hero-stats-login.webp" alt="My Image" width={1865} height={1750} />
                    </div>
                </div>
                <div className="mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12">
                    <a href="customers.html" className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</a>
                    <div className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
                        <Image src={""} width={25} alt='' className='h-8 w-auto lg:h-10 lg:w-auto' />
                    </div>
                </div>
            </Container>
        </section>

    )
}