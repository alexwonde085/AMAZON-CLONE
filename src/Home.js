import { Carousel } from 'react-bootstrap';
import React from 'react';
import "./Home.css";
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* <img className="home__image" 
                    src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=""  /> */}
                    <Carousel>
                    <Carousel.Item>
                            <img
                                className="d-block w-100 home__image"
                                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 home__image"
                                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjA0N2YxY2It/NjA0N2YxY2It-MWUyMDM4MzUt-w3000._CB655387196_.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/prime/2021_GTM/US2021D1155_GW_DesktopHero_3000x1200_EN._CB659228198_.jpg"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/caltrain/WORE_2021_GWBleedingHero_3000x1200_DATE_Final_en-US_HO_1._CB655700848_.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZWExM2NmYjct/ZWExM2NmYjct-ZTk5ZjdkNzkt-w3000._CB655980992_.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/audible/AudibleSleep_Updates_02092021_Amazon_GRD_DesktopHero_Template_3000x1200_2x._CB658668607_.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YTg3MzkwNjMt-w3000._CB412118632_.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
            
                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="The lean startup: How Constant Innovation Creates Radically Succesful Business Paperback"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                        />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71heOQ9O4FL._AC_SL1500_.jpg"
                    />
                    <Product 
                        id="49538090"
                        title="Dell XPS 13 (9310), 13.4- inch UHD+ Touch Laptop - Intel Core i7-1185G7, 32GB 4267MHz LPDDR4x RAM, 2TB SSD, Iris Xe Graphics,"
                        price={1999.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91KKKqE7gdL._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product 
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                    <Product 
                        id="3254354346"
                        title="Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release"
                        price={29.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61wAVJDAFTL._AC_SL1000_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product    
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product    
                        id="90829332"
                        title="Samsung CF390 Series 27 inch FHD 1920x1080 Curved Desktop Monitor for Business, HDMI, VGA, VESA mountable, 3-Year Warranty, TAA (C27F390FHN), Black"
                        price={204.98}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/91mL-OSb40L._AC_SX679_.jpg"
                    />
                    <Product    
                        id="90829331"
                        title="Colorful Handmade Ethiopian Habesha Baskets 9005306 (9x12 Art Print, Wall Decor Travel Poster) "
                        price={12.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61vXLNQzrLL._AC_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
