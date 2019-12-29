import React from 'react'

const FooterSection = () => {
    return (
        <footer>
			<section id="footer-area" className="footer-area-section">
				<div className="container">
					<div className="section-content">
						<div className="footer-area-content">
							<div className="row">
								<div className="col-md-3 col-sm-6">
									<div className="footer-content">
										<span className="right deep-black">{new Date().getFullYear()} Landy. All right reserved</span>
										<div className="footer-address mt20">
											<span>457 Shantibag, Green Road 
												Philadelphia, PH USA 17512
												+1 437 800 2078
											</span>
										</div>
										<div className="footer-social ul-li mt20">
											<ul className="footer-social-list">
												<li><a href="#"><span className="ti-facebook"></span></a></li>
												<li><a href="#"><span className="ti-twitter-alt"></span></a></li>
												<li><a href="#"><span className="ti-google"></span></a></li>
												<li><a href="#"><span className="ti-vimeo-alt"></span></a></li>
											</ul>
										</div>
									</div>
								</div>
								

								<div className="col-md-3 col-sm-6">
									<div className="footer-service-list">
										<div className="footer-widget pb20">
											<h2 className="widgettile deep-black">Information</h2>
										</div>
										<div className="service-list ul-li ul-li-block">
											<ul className="service-list-item">
												<li><a href="#">Terms & Condision</a></li>
												<li><a href="#">About Us</a></li>
												<li><a href="#">Privacy Policy</a></li>
												<li><a href="#">Download</a></li>
											</ul>
										</div>
									</div>
									
								</div>


								<div className="col-md-3 col-sm-6">
									<div className="footer-service-list">
										<div className="footer-widget pb20">
											<h2 className="widgettile deep-black">Support</h2>
										</div>
										<div className="service-list ul-li ul-li-block">
											<ul className="service-list-item">
												<li><a href="#">FAQ</a></li>
												<li><a href="#">Help</a></li>
												<li><a href="#">Contact</a></li>
											</ul>
										</div>
									</div>
								</div>
								

								<div className="col-md-3 col-sm-6">
									<div className="footer-widget pb20">
										<h2 className="widgettile deep-black">Subscribe</h2>
									</div>
									<span>Don’t miss out our every updates and news!</span>
									<div className="newsletter">
										<form action="#" method="get">
											<div className="newsletter-email">
												<input type="email" className="" />
												<button type="submit" value="Submit"><span className="orange-gred ti-arrow-right"></span></button>
											</div>
										</form>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
    )
}

export default FooterSection
