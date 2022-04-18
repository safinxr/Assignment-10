import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center p-5 bg-black'>
            <p><small className='text-white'>Copyright &copy; {year} fit boss</small></p>
        </footer>
    );
};

export default Footer;