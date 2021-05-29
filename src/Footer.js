import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="main__footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h4>Get to Know Us</h4>
                    <ul className="main__footerList">
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Amazon</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Press Center</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Amazon Devices</a></li>
                        <li><a href="#">Amazon Tours</a></li>
                    </ul>
                    </div>
                    <div className="col">
                    <h4>Make Money wuth Us</h4>
                    <ul className="main__footerList">
                        <li><a href="#">Sell products on Amazon</a></li>
                        <li><a href="#">Sell apps on Amazon</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                        <li><a href="#">Self-Publish with Us</a></li>
                        <li><a href="#">Host an Amazon Hub</a></li>
                        <li><a href="#">See More Make Money with Us</a></li>
                    </ul>
                    </div>
                    <div className="col">
                    <h4>Amazon Payment Products</h4>
                    <ul className="main__footerList">
                        <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
                        <li><a href="#">Amazon.com Store Card</a></li>
                        <li><a href="#">Amazon Secured Card</a></li>
                        <li><a href="#">Amazon Business Card</a></li>
                        <li><a href="#">Amazon Business Line of Credit</a></li>
                        <li><a href="#">Shop with Points</a></li>
                        <li><a href="#">Credit Card Marketplace</a></li>
                        <li><a href="#">Reload Your Balance</a></li>
                        <li><a href="#">Amazon Currency Converter</a></li>
                    </ul>
                    </div>
                    <div className="col">
                    <h4>Let Us Help You</h4>
                    <ul className="main__footerList">
                        <li><a href="#">Amazon and COVID-19</a></li>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Your Orders</a></li>
                        <li><a href="#">Shipping Rates & Policies</a></li>
                        <li><a href="#">Amazon Prime</a></li>
                        <li><a href="#">Returns & Replacements</a></li>
                        <li><a href="#">Manage Your Content and Devices</a></li>
                        <li><a href="#">Amazon Assistant</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default Footer
