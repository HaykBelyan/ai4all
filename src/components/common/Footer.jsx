import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer
			className="site-footer"
			style={{
				backgroundColor: "#2c3e50",
				color: "white",
				padding: "40px 0",
				marginTop: "40px",
			}}
		>
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexWrap: "wrap",
					gap: "20px",
				}}
			>
				<div>
					<h4>AI4ALL Armenia</h4>
					<p>{t("footer.eif_initiative")}</p>
				</div>
				<div>
					<h4>{t("footer.quickLinks")}</h4>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li>
							<Link to="/about" style={{ color: "white" }}>
								{t("nav.about")}
							</Link>
						</li>
						<li>
							<Link to="/courses" style={{ color: "white" }}>
								{t("nav.courses")}
							</Link>
						</li>
						<li>
							<Link to="/contact" style={{ color: "white" }}>
								{t("nav.contact")}
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4>{t("footer.followUs")}</h4>
					<div
						className="social-icons"
						style={{ display: "flex", gap: "15px", fontSize: "1.5rem" }}
					>
						<a
							href="https://www.linkedin.com/company/ai4allbyeif"
							style={{ color: "white" }}
							aria-label="LinkedIn"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://www.facebook.com/AI4ALLbyEIF"
							style={{ color: "white" }}
							aria-label="Facebook"
						>
							<FaFacebook />
						</a>
						<a
							href="https://www.instagram.com/ai4allbyeif"
							style={{ color: "white" }}
							aria-label="Twitter"
						>
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
			<div
				className="container"
				style={{
					textAlign: "center",
					marginTop: "30px",
					borderTop: "1px solid #34495e",
					paddingTop: "20px",
					fontSize: "0.9rem",
				}}
			>
				<p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
			</div>
		</footer>
	);
};

export default Footer;
