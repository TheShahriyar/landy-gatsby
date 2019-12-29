import React from 'react'
import ExtraImg from "../img/mock-up/extra.png"
import Title from './Title'

const FeatureExtendSection = () => {
    return (
        <section id="extra-features" className="extra-features-section">
			<div className="container">
				<div className="section-content">
					
					<Title upperTitle="You will get" lowerTitle="Some Extra Feature" />
					
					<div className="extra-features-content">
						<div className="row">
							<div className="col-md-4 col-sm-6">
								<div className="extra-left">
									<div className="extra-left-content">
										<div className="extra-icon-text text-left">
											<div className="features-icon text-center orange-gred">
												<i className="ti ti-paint-bucket"></i>
											</div>
											<div className="features-text pt25">
												<div className="features-text-title text-right pb10">
													<h3 className="deep-black">Clean Design</h3>
												</div>
												<div className="features-text-dec text-right">
													<span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</span>
												</div>
											</div>
										</div>
									</div>
									

									<div className="extra-left-content">
										<div className="extra-icon-text text-left">
											<div className="features-icon text-center orange-gred">
												<i className="ti ti-user"></i>
											</div>
											<div className="features-text pt25">
												<div className="features-text-title text-right pb10">
													<h3 className="deep-black">User Friendly</h3>
												</div>
												<div className="features-text-dec text-right">
													<span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</span>
												</div>
											</div>
										</div>
									</div>
									

									<div className="extra-left-content">
										<div className="extra-icon-text text-left">
											<div className="features-icon text-center orange-gred">
												<i className="ti ti-desktop"></i>
											</div>
											<div className="features-text pt25">
												<div className="features-text-title text-right pb10">
													<h3 className="deep-black">Fully Responsive</h3>
												</div>
												<div className="features-text-dec text-right">
													<span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</span>
												</div>
											</div>
										</div>
									</div>
									
								</div>
							</div>
							

							<div className="col-sm-4">
								<div className="extra-pic text-center">
									<img src={ExtraImg} alt="img" />
								</div>
							</div>
							

							<div className="col-md-4 col-sm-6">
								<div className="extra-right">
									<div className="extra-left-content">
										<div className="extra-icon-text text-right">
											<div className="features-icon text-center orange-gred">
												<i className="ti ti-money"></i>
											</div>
											<div className="features-text pt25">
												<div className="features-text-title text-left pb10">
													<h3 className="deep-black">Clean Design</h3>
												</div>
												<div className="features-text-dec text-left">
													<span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</span>
												</div>
											</div>
										</div>
									</div>
									

									<div className="extra-left-content">
										<div className="extra-icon-text text-right">
											<div className="features-icon text-center orange-gred">
												<i className="ti ti-eye"></i>
											</div>
											<div className="features-text pt25">
												<div className="features-text-title text-left pb10">
													<h3 className="deep-black">Retina Ready</h3>
												</div>
												<div className="features-text-dec text-left">
													<span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</span>
												</div>
											</div>
										</div>
									</div>
									

									<div className="extra-left-content">
										<div className="extra-icon-text text-right">
											<div className="features-icon text-center orange-gred">
												<i className="ti ti-comment-alt"></i>
											</div>
											<div className="features-text pt25">
												<div className="features-text-title text-left pb10">
													<h3 className="deep-black">24/7 Support</h3>
												</div>
												<div className="features-text-dec text-left">
													<span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</span>
												</div>
											</div>
										</div>
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

export default FeatureExtendSection
