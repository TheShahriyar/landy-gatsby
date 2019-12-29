import React from 'react'
import Testi1 from "../img/testimonial/testi-1.jpg"
import Testi3 from "../img/testimonial/testi-3.jpg"

const TestimonialSection = () => {
    return (
        <section id="testimonial" className="testimonial-section">
			<div className="container">
				<div className="section-content"> 
					<div className="row testimonial-content">
						<div className="col-md-4">
							<div className="testimonial-name-designation">
								<div className="quate-icon orange-gred">
									<span className="ti ti-quote-left"></span>
								</div>
								
								<div className="testimonial-text">
									<span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender.</span>
								</div>
								
								<div className="testimonial-name-des  pt25">
									<div className="testimonial-pic">
										<img src={Testi1} alt="img" />
									</div>
									
									<div className="client-designation pt20">
										<span className="name deep-black">Tylor Swift</span>
										<span className="designation">SR. Graphic Artist</span>
									</div>
									
								</div>
								
							</div>	
						</div>
						


						<div className="col-md-4">
							<div className="testimonial-name-designation">
								<div className="quate-icon orange-gred">
									<span className="ti ti-quote-left"></span>
								</div>
								
								<div className="testimonial-text">
									<span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt .</span>
								</div>
								
								<div className="testimonial-name-des  pt25">
									<div className="testimonial-pic">
										<img src={Testi3} alt="img" />
									</div>
									
									<div className="client-designation pt20">
										<span className="name deep-black">Emma Watson</span>
										<span className="designation">SR. Developer</span>
									</div>
									
								</div>
								
							</div>
						</div>
						



						<div className="col-md-4">
							<div className="testimonial-name-designation">
								<div className="quate-icon orange-gred">
									<span className="ti ti-quote-left"></span>
								</div>
								
								<div className="testimonial-text">
									<span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender.</span>
								</div>
								
								<div className="testimonial-name-des  pt25">
									<div className="testimonial-pic">
										<img src={Testi1} alt="img" />
									</div>
									
									<div className="client-designation pt20">
										<span className="name deep-black">Selena Gomez</span>
										<span className="designation">SR. SEO Mgr</span>
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

export default TestimonialSection
