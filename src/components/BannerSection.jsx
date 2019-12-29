import React from 'react'
import GoogleStore from "../img/store/google.png"
import AppleStore from "../img/store/apple.png"
import BannerMockup from "../img/mock-up/home.png"

const BannerSection = () => {
    return (
        <section id="banner-area" className="banner-area-section home-2">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
                        <div className="banner-area-content">
                            <div className="banner-area-head">
                                <h1 className="pb30">Best App Landing Solution</h1>
                                <div  className="banner-text pb40">
                                    <span>Lorem ipsum dolor sit amet consectetur adip elit sed do eiusmod tempor</span>
                                </div>
                                <div className="download-store ul-li">
                                    <ul className="store-list">
                                        <li>
                                            <a href="https://play.google.com/store?hl=en" target="blank">
                                                <img src={GoogleStore} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://itunes.apple.com/us/app/apple-store/id375380948?mt=8" target="blank">
                                                <img src={AppleStore} />
                                            </a>
                                        </li>
                                    </ul>
                                </div> 

                                <div className="banner-mock-up home-1 zooming">
                                    <img src={BannerMockup} alt="img"/>
                                </div>

                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</section>
    )
}

export default BannerSection
