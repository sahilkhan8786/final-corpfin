import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const RootLayout = () => {
    return (
        <>
            <ScrollToTop />
            <section>
                <Header />
                <Outlet />
                <Footer />
            </section>
        </>
    )
}

export default RootLayout