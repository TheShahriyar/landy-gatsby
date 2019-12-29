import React from 'react'
import AboutImg from "../img/mock-up/about.png"
import GoogleStore from "../img/store/google.png"
import AppleStore from "../img/store/apple.png"

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
			<div className="container">
				<div className="section-content">
					<div className="about-section-content">
						<div className="row">
							<div className="col-md-6">
								<div className="about-left-img zooming">
									<img src={AboutImg} alt="img"/>
								</div>
							</div>
							

							<div className="col-md-6">
								<div className="about-section-text">
									<div className="section-title text-left pb50">
										<span className="title-text pink text-uppercase">AVAILABLE NOW</span>
										<h1 className="title deep-black pb40">Best Landing Page Solution</h1>
										<span className="title-dec">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorin.
										</span>
									</div>
									
									<div className="download-store ul-li">
										<ul className="store-list">
											<li>
                                                <a href="https://play.google.com/store?hl=en" target="blank">
                                                    <img src={GoogleStore} alt="Google Store" />
                                                </a>
                                            </li>
											<li>
                                                <a href="https://itunes.apple.com/us/app/apple-store/id375380948?mt=8" target="blank">
                                                    <img src={AppleStore} alt="Apple Store" />
                                                </a>
                                            </li>
										</ul>
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</section>
    )
}

export default AboutSection
