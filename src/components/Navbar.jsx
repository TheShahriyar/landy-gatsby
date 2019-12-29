import React, { useState, useEffect } from 'react';
import Logo from "../img/logo/logo.png"
import "../css/menu.css"
import { Link } from "react-scroll";

const Navbar = () => {
	const [isOpen, setNav] = useState(false)
	const toggleNav = () => {
		setNav(isOpen => !isOpen)
	}

	const [windowScroll, setWindowScroll] = useState("false");
	useEffect(() => {
		document.addEventListener("scroll", () => { 
			if (window.scrollY > 170) { 
				 setWindowScroll("true")
			}
		})
	})
    return (
        <div className={windowScroll ? "navbar-fixed-top menu-bg-overlay" : "navbar-fixed-top"}>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
				<a className="navbar-brand" href="#"><img src={Logo} alt="Company Logo" /></a>
				<button className={isOpen ? `navbar-toggler` : `navbar-toggler collapsed`} type="button" onClick={toggleNav} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"><i className="ti ti-menu"></i></span>
				</button>

				<div className={isOpen ? `collapse navbar-collapse show` : `collapse navbar-collapse`} id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link
							className="nav-link"
							to="banner-area"
							smooth={true}
							offset={-80}
							duration={500}
							>Home</Link>
						</li>
						<li className="nav-item">
							<Link
							className="nav-link"
							to="about"
							smooth={true}
							offset={-80}
							duration={500}
							>About</Link>
						</li>
						<li className="nav-item">
						<Link
							className="nav-link"
							to="extra-features"
							smooth={true}
							offset={-80}
							duration={500}
							>Feature</Link>
						</li>
						<li className="nav-item">
						<Link
							className="nav-link"
							to="showcase"
							smooth={true}
							offset={-80}
							duration={500}
							>Showcase</Link>
						</li>
						<li className="nav-item">
						<Link
							className="nav-link"
							to="pricing"
							smooth={true}
							offset={-80}
							duration={500}
							>Pricing</Link>
						</li>
						<li className="nav-item">
							<Link
							className="nav-link"
							to="download-area"
							smooth={true}
							offset={-80}
							duration={500}
							>Download <span className="ti ti-import"></span></Link>
						</li>
						<li className="nav-item">
						<Link
							className="nav-link"
							to="contact"
							smooth={true}
							offset={-80}
							duration={500}
							>Contact</Link>
						</li>
					</ul>
				</div>
				</div>
			</nav>
		</div>
    )
}

export default Navbar
