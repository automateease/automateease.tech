import localFont from 'next/font/local';

export const urbanistFont = localFont({
    src: [
        {
            path: './urbanist/Urbanist-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './urbanist/Urbanist-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './urbanist/Urbanist-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './urbanist/Urbanist-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './urbanist/Urbanist-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './urbanist/Urbanist-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './urbanist/Urbanist-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './urbanist/Urbanist-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: './urbanist/Urbanist-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
    
    ],
    display: 'swap',
})