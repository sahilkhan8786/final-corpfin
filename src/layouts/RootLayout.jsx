import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
        </section>
    )
}

export default RootLayout