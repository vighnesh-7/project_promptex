'use client'
import Nav from '@components/Nav'
import React, { useEffect, useState } from 'react'
import Provider from '@components/Provider'
import { ThemeProvider } from "@components/theme_provider"
import { useRouter } from 'next/navigation'
import { IoMoonSharp } from "react-icons/io5"
import { FaSun } from "react-icons/fa"

const DarkThemeToggle = ({children}) =>  {
    const router = useRouter()
    const [currTheme, setTheme] = useState("system")

    // useEffect(()=>{
    //     const theme1 = localStorage.getItem("theme2")
    //     if(theme1){
    //         if(theme1==="true"){
    //             setTheme(true)
    //         }else setTheme(false)
    //     }
    //     router.refresh()
    // },[])

    // const toggleTheme =()=>{
    //     // setTheme(!theme)
    //     // localStorage.setItem("theme",(!theme))
    //     const newTheme = !currTheme;
    //     setTheme(newTheme);
    //     localStorage.setItem("theme2", String(newTheme));
    //     window.location.reload()
    // }  
    useEffect(()=>{
        const theme1 = localStorage.getItem("theme")
        if(theme1){
            if(theme1==="light"){
                setTheme("light")
            }else setTheme("dark")
        }
        router.refresh()
    },[])

    const toggleTheme =()=>{
        let newTheme=""
        if(currTheme==="dark") newTheme="light"
        else  newTheme="dark"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme);
        window.location.reload()
    }
    return (
        <Provider>
                <ThemeProvider defaultTheme={currTheme}  attribute='class'  >
                    <div className="main dark:bg-stone-750 w-full ">
                        <div className='gradient' />
                    </div>
                    <main className='app dark:bg-stone-900 w-full'>
                    <Nav/>
                    {
                        currTheme==='light' ?(
                            <button className='p-3 m-0 text-center hover:outline hover:outline-4 hover:bg-gray-200 hover:text-blue-600 hover:outline-blue-600 dark:bg-white dark:text-black bg-black rounded-full text-white text-2xl absolute top-20 sm:right-16  max-sm:top-16 max-sm:left-10 max-sm:p-2' onClick={toggleTheme}>
                                <IoMoonSharp/>
                            </button>
                        ):(
                            <button className='p-3 m-0 text-center hover:outline hover:outline-4 hover:bg-gray-200 dark:hover:text-orange-500 hover:outline-orange-500 dark:bg-white dark:text-black bg-black rounded-full text-white text-2xl absolute top-20 sm:right-16  max-sm:top-16 max-sm:left-10 max-sm:p-2' onClick={toggleTheme}>
                                <FaSun/>
                            </button>
                        )
                    }

                    {children}
                    </main>
                </ThemeProvider>
            </Provider>
    )
}

export default DarkThemeToggle