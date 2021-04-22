import React from 'react'
import './Home.css'
import Product from './Product.js'



function Home() {
    return (
        <div className="home">
            <div className="home_container">
            
                <img className="home_image" alt="Background" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>

                <div className="home_row">
                    <Product id={1} title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)" price={20} rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL.jpg"/>

                    <Product id={2} title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U" price={20} rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"/>
                </div>

                <div className="home_row">
                <Product id={3} title="Toshiba (HDTB420XK3AA) Canvio Basics 2TB Portable External Hard Drive USB 3.0, BlackToshiba" price={20} rating={4}
                    image="https://m.media-amazon.com/images/I/910A6B1Sa4L._AC_UY327_FMwebp_QL65_.jpg"/>

                <Product id={4} title="Seagate Storage Expansion Card for Xbox Series X|S 1TB Solid State Drive " price={20} rating={4}
                    image="https://m.media-amazon.com/images/I/61MGrHUMWzL._AC_UY327_FMwebp_QL65_.jpg"/>

                <Product id={5} title="Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020" price={20} rating={4}
                    image="https://m.media-amazon.com/images/I/71c5W9NxN5L._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>

                <div className="home_row">
                <Product id={6} title="Samsung Super Model" price={20} rating={4}
                    image="https://m.media-amazon.com/images/I/41VCva3xinL._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Home;
