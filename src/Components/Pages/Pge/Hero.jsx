import './Hero.scss'
import Fox from '../../Assets/Icons/firefox.svg'
import Hub from '../../Assets/Icons/github.svg'
import Fire from '../../Assets/Icons/Frame.svg'
import Rectan from '../../Assets/Img/Rectangle.png'

function Hero() {
    return (
        <>
        <section className="hero">
            <div className="container">
                <div className="hero__info">
                    <h1 className="hero__heading">Always <br /> Ready to Code.</h1>
                    <p className="hero__text">Spin up fresh, automated dev environments <br /> for each task, in the cloud, in seconds.</p>
                    <div className="hero__fon">
                        <button className="hero__btn">Try Now</button>
                        <p className="hero__tex">Open a workspace. <br /> Start from any Git context.</p>
                    </div>
                    <div className="hero__icons">
                        <img src={Fox} alt="fox" className="hero__img" width={29} height={29}/>
                        <img src={Hub} alt="hub" className="hero__img" width={29} height={29}/>
                        <img src={Fire} alt="fire" className="hero__img" width={29} height={29}/>
                    </div>
                </div>
                <img src={Rectan} alt="rectan" className="hero__pic" width={632} height={652} />
            </div>
        </section>
        </>
    )
}

export default Hero