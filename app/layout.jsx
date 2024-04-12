import '@styles/globals.css'
import Footer from '@components/Footer';
import DarkThemeToggle from '@components/DarkThemeToggle';
// import  { Metadata, Viewport } from 'next';


export const metadata ={
    manifest: '/manifest.json',
    title:"Promptex",
    description : "Discover & Share AI Prompts",
    icons: {
        icon: "/assets/images/logo.svg",
    },
    themeColor: '#e9e3dc',
}

const RootLayout = ({children}) => {
return (
    <html className='dark:bg-stone-950 '>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#ffffff" />
        </head>
        <body  className='dark:bg-stone-950 w-full'>
            <DarkThemeToggle children={children} />
            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout