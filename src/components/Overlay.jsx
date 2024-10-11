import React from 'react'

const Overlay = ({ children }) => {
    return (
        <section className='w-full h-screen flex items-center justify-center bg-white fixed top-0 left-0 z-50'>
            {children}
        </section>
    )
}

export default Overlay