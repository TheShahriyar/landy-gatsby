import React from 'react'
import GoogleStore from "../img/store/google.png"
import AppleStore from "../img/store/apple.png"

const DownloadSection = () => {
    return (
        <section id="download-area" className="download-section">
			<div className="container">
				<div className="section-content">
					<div className="download-area-content  text-center">
						<div className="download-number  pb20">
							<h2>7895</h2>
						</div>
						<div className="download-area-text  pb20">
							<span>Join our thoursands of satisfied family and get your copy to use!</span>
						</div>
						<div className="download-now pb40">
							<h3>Download Your App Now</h3>
						</div>
						<div className="download-store ul-li">
							<ul className="store-list">
								<li><a href="https://play.google.com/store?hl=en" target="blank"><img src={GoogleStore} alt="Google Store" /></a></li>
								<li><a href="https://itunes.apple.com/us/app/apple-store/id375380948?mt=8" target="blank"><img src={AppleStore} alt="Apple Store" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default DownloadSection
