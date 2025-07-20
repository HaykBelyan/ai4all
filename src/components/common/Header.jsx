import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import ai4all_logo from "/images/logos/AI4ALL_logo.png";
import eif_logo from "/images/logos/EIF_logo.png";

const Header = () => {
	const { t, i18n } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setIsMenuOpen(false);
	};

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		setIsMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1023) {
				setIsMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="site-header">
			<div className="container">
				<NavLink to="/" className="logo">
					<div className="two_logos">
						<img src={ai4all_logo} alt="AI4ALL Armenia Logo" />
						<img src={eif_logo} alt="EIF Logo" />
					</div>
				</NavLink>

				<div className={`header__right ${isMenuOpen ? "active" : ""}`}>
					<nav>
						<NavLink to="/">{t("nav.home")}</NavLink>
						<NavLink to="/about">{t("nav.about")}</NavLink>
						<NavLink to="/courses">{t("nav.courses")}</NavLink>
						<NavLink to="/success-stories">{t("nav.success")}</NavLink>
						<NavLink to="/contact" className="cta-nav">
							{t("nav.contact")}
						</NavLink>
					</nav>

					{/* Language switcher with flags */}
					<div className="lang-switcher">
						<button
							onClick={() => changeLanguage("en")}
							className={i18n.language.startsWith("en") ? "active" : ""}
							aria-label="Switch to English"
						>
							<img
								src={`${import.meta.env.BASE_URL}/images/flags/us.svg`}
								alt="USA Flag"
							/>
						</button>
						<button
							onClick={() => changeLanguage("hy")}
							className={i18n.language === "hy" ? "active" : ""}
							aria-label="Switch to Armenian"
						>
							<img
								src={`${import.meta.env.BASE_URL}/images/flags/am.svg`}
								alt="Armenian Flag"
							/>
						</button>
					</div>
				</div>

				<button
					className="mobile-menu-toggle"
					onClick={handleMenuToggle}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>
		</header>
	);
};

export default Header;
