import './Footer.scss';

import FooterTop from '../FooterTop/FooterTop';
import FooterBottom from '../FooterBottom/FooterBottom';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer__inner container">
				<FooterTop/>
				<FooterBottom/>
			</div>
		</footer>
	)
}

export default Footer