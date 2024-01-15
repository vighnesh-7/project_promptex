import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Head from 'next/head'

export const metadata ={
    title:"Promptex",
    description : "Discover & Share AI Prompts",
    icons: {
        icon: "/assests/images/logo.svg",
    },
}

const RootLayout = ({children}) => {
return (
    <html>
        {/* <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/svg" sizes="32x32" href="/assets/images/logo.svg" />
        </Head> */}
        <body>
            <Provider>

            <div className="main">
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout