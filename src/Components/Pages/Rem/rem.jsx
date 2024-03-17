import './rem.scss'
import More from '../../Assets/Img/More.png'
import Chrome from '../../Assets/Icons/Chrome.svg'
import Fox from '../../Assets/Icons/Fire.svg'

function Rem() {
    return (
        <>
        <section className="rem">
            <div className="container">
                <h3 className="rem__heading">Remote-first. Secure by design.</h3>
                <img src={More} alt="more" className="rem__img" width={1270} height={821} />
                <p className="rem__text">You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and networks.</p>
                <div className="rem__buts">
                    <button className="rem__btn"><img src={Chrome} alt="chrome" style={{marginRight: '10px'}}/> <span>Chrome Extension</span></button>
                    <button className="rem__btn"><img src={Fox} alt="fox" style={{marginRight: '10px'}}/> <span>Firefox Extension</span></button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Rem