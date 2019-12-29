import React from 'react'
import Title from './Title'

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
			<div className="container">
				<div className="section-content">
					<Title upperTitle="Get in touch" lowerTitle="Drop us a message" />
					


					<div className="row">
                        <div className="col-md-12">
                            <div className="comment-form">
                                <form id="contact_form" action="#" method="POST">
                                    <div className="contact-info">
                                        <input className="name  mr30" name="name" type="text" placeholder="Name*" />
                                    </div>
                                    <div className="contact-info">
                                        <input className="email" name="email" type="text" placeholder="Email*" />
                                    </div>
                                    <div className="contact-info-1">
                                        <input className="name" name="name" type="text" placeholder="Subject" />
                                    </div>
                                    <div className="contact-info">
                                        <textarea id="message" name="message" placeholder="Message" rows="7" cols="30"></textarea>
                                    </div>
                                    <div className="submit-btn text-center mt20">
                                        <button type="submit" value="Submit">Submit Now</button>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>

				</div>
			</div>
		</section>
    )
}

export default ContactSection
