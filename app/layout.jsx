import '@styles/globals.css'
import Footer from '@components/Footer';
import DarkThemeToggle from '@components/DarkThemeToggle';

export const metadata ={
    title:"Promptex",
    description : "Discover & Share AI Prompts",
    icons: {
        icon: "/assets/images/logo.svg",
    },
}

const RootLayout = ({children}) => {
return (
    <html className='dark:bg-stone-950 '>
        <body  className='dark:bg-stone-950 w-full'>
            <DarkThemeToggle children={children} />
            <Footer/>

        </body>
    </html>
  )
}

export default RootLayout