import './footer.scss'
import foterlogo from '../../Assets/Img/footerlog.png'
import twit  from '../../Assets/Img/twit.png'
import github from '../../Assets/Img/fotergit.png'
import comment from '../../Assets/Img/comm.png'

function Footer() {
    return (
        <>

        <footer className="footer">
            <div className="container">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <h6 className="footer__heading">Gitpod</h6>
                            <a href="#link" className="footer__link">Home</a>
                            <a href="#link" className="footer__link">Features</a>
                            <a href="#link" className="footer__link">Pricing</a>
                            <a href="#link" className="footer__link">Changelog</a>
                            <a href="#link" className="footer__link">Self-Hosted</a>
                            <a href="#link" className="footer__link">Gitpod vs GitHub</a>
                            <a href="#link" className="footer__link">Codespaces</a>
                            <a href="#link" className="footer__link">Status</a>
                        </li>
                        <li className="footer__item">
                            <h6 className="footer__heading">Developer</h6>
                            <a href="#link" className="footer__link">Getting started</a>
                            <a href="#link" className="footer__link">Screencasts</a>
                            <a href="#link" className="footer__link">Blog</a>
                            <a href="#link" className="footer__link">Documentation</a>
                            <a href="#link" className="footer__link">Report a bug</a>
                            <a href="#link" className="footer__link">Community</a>
                        </li>
                        <li className="footer__item">
                            <h6 className="footer__heading">Company</h6>
                            <a href="#link" className="footer__link">About</a>
                            <a href="#link" className="footer__link">Careers</a>
                            <a href="#link" className="footer__link">Contact</a>
                            <a href="#link" className="footer__link">Media Kit</a>
                        </li>
                        <li className="footer__item">
                            <h6 className="footer__heading">Legal</h6>
                            <a href="#link" className="footer__link">Imprint</a>
                            <a href="#link" className="footer__link">Terms of Service</a>
                            <a href="#link" className="footer__link">Privacy Policy</a>
                        </li>
                    </ul>
                    <span className='footer__line'></span>
                    <div className="footer__tag">
                        <div className="footer__log">
                            <img src={foterlogo} alt="logo" className="footer__logo" width={24} height={24} />
                            <span className="footer__t">Copyright © 2021 Gitpod</span>
                        </div>
                        <div className="footer__icons">
                            <a href="#link" className="footer__l">
                                <img src={twit} alt="twit" className="footer__pg" width={24} height={24} />
                            </a>
                            <a href="#link" className="footer__l">
                                <img src={github} alt="twit" className="footer__pg" width={24} height={24} />
                            </a>
                            <a href="#link" className="footer__l">
                                <img src={comment} alt="twit" className="footer__pg" width={24} height={24} />
                            </a>
                        </div>
                    </div>
            </div>
        </footer>
        
        </>
    )
}

export default Footer