import React from 'react'
import Title from './Title'

const PricingSection = () => {
    return (
        <section id="pricing" className="pricing-plan-section">
			<div className="container">
				<div className="section-content">
					<div className="pricing-plan-content">
						<Title upperTitle="Let Test" lowerTitle="Affordable Price" />
						
						<div className="row">
							<div className="col-md-4 no-padding">
								<div className="landy-pricing text-center ul-li">
									<div className="header-pricing">
										<div className="pricing-price">
											<h3 className="content-price pink pb10">$39</h3>
											<span className="content-duration text-uppercase pb10">per month</span>
										</div>
										<div className="content-title mt10">
											<div className="deep-black text-uppercase">ECONOMY</div>
										</div>
									</div>
									
									<div className="pricing-plan-list  pt35 pb40">
										<ul className="landy-pricing-content-desc">
											<li>exercitation ullamco laborii
											</li>
											<li>commodo consequat
											</li>
											<li>aute reprehenderit voluptate 
											</li>
											<li>cillum doloreftu fgjhr
											</li>
										</ul>
									</div>
									
									<div className="landy-content-button text-uppercase">
										<a href="#">SIGN UP NOW</a>
									</div>
								</div>
							</div>
                            <div className="col-md-4 no-padding">
								<div className="landy-pricing middle text-center ul-li">
									<div className="landing-icon text-left orange-gred">
										<span className=" ti ti-bookmark-alt"></span>
									</div>
									<div className="header-pricing">
										<div className="pricing-price">
											<h3 className="content-price pink pb10">$59</h3>
											<span className="content-duration text-uppercase pb10">per month</span>
										</div>
										<div className="content-title mt10">
											<div className="deep-black text-uppercase">STANDARD</div>
										</div>
									</div>
									
									<div className="pricing-plan-list  pt35 pb40">
										<ul className="landy-pricing-content-desc">
											<li>exercitation ullamco laborii
											</li>
											<li>commodo consequat
											</li>
											<li>aute reprehenderit voluptate 
											</li>
											<li>cillum doloreftu fgjhr
											</li>
										</ul>
									</div>
									
									<div className="landy-content-button text-uppercase">
										<a href="#">SIGN UP NOW</a>
									</div>
								</div>
							</div>
                            <div className="col-md-4 no-padding">
								<div className="landy-pricing text-center ul-li">
									<div className="header-pricing">
										<div className="pricing-price">
											<h3 className="content-price pink pb10">$79</h3>
											<span className="content-duration text-uppercase pb10">per month</span>
										</div>
										<div className="content-title mt10">
											<div className="deep-black text-uppercase">ULTIMATE</div>
										</div>
									</div>
									
									<div className="pricing-plan-list  pt35 pb40">
										<ul className="landy-pricing-content-desc">
											<li>exercitation ullamco laborii
											</li>
											<li>commodo consequat
											</li>
											<li>aute reprehenderit voluptate 
											</li>
											<li>cillum doloreftu fgjhr
											</li>
										</ul>
									</div>
									
									<div className="landy-content-button text-uppercase">
										<a href="#">SIGN UP NOW</a>
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

export default PricingSection
