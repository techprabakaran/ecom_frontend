import React from 'react';
import Header from './header';
import Footer from './footer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Layout(props) {
    return (
        <div id="wrapper">
            <Header />            
            <ToastContainer />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;