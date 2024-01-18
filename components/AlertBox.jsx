'use client'
import { useEffect } from "react";
import React from 'react'
import { IoIosClose } from "react-icons/io";


const AlertBox = ({ heading,message,showModal , onClose }) => {
    const buttonRef = React.useRef();

    useEffect(() => {
    if (showModal) {
        // throwing the page focus to the dialogue box 
        buttonRef.current.focus();
    }
    }, [showModal]);

    
const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        onClose();
    }
};

return (
    <div style={{
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
    }} >
        <div className='  bg-neutral-200  relative border-solid border-2 border-gray-600  outline-12' style={{  
        padding: "2rem",
        fontFamily:'Roboto',
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}} >
            <div className='flex-between p-4 px-0  absolute top-0 right-0 h-1 w-full bg-slate-600 ' style={{borderTopLeftRadius: "5px",borderTopRightRadius:"5px"}} >
                <div className='pl-2 text-gray-100 ' style={{letterSpacing:'0.65px'}}>
                    <h4 className='font-bold'>{heading}</h4>
                </div>
                <div className=''>
                <button ref={buttonRef} tabIndex={0} onKeyDown={handleKeyDown} onClick={onClose} className='p-0 text-center text-3xl bg-red-600 rounded-tr-md '
                    style={{paddingBottom:'3.75px',paddingLeft:'3px',marginTop:'1px'}}
                >
                    <IoIosClose />
                </button>
                </div>
            </div>
            <div className='pt-5'>
                <p className='lead font-normal dark:text-black pr-5'>{message} </p>
            </div>            
        </div>
    </div>
    )
}

export default AlertBox
