import './get.scss'
import git from '../../Assets/Img/git.png'
import cat from '../../Assets/Img/catblack.png'
import bitbuck from '../../Assets/Img/bitbuck.png'
import Ts from '../../Assets/Img/TS.png'
import Pton from '../../Assets/Img/PTON.png'
import Go from '../../Assets/Img/GO.png'
import Rust from '../../Assets/Img/Rust.png'
import java from '../../Assets/Img/java.png'
import svelt from '../../Assets/Img/svelt.png'

function Get() {
    return (
        <>
            <section className='get'>
                <div className="container">
                    <h4 className="get__heading">Get started now</h4>
                    <div className="get__flex">
                        <div className="get__first">
                            <h5 className="get__head">Connect Git repository</h5>
                            <p className="get__text">Select a Git provider to start with an existing project from any Git context.</p>
                            <button className='get__lanch'><img src={git} alt="git" /><span>Continue with GitLab</span></button>
                            <button className='get__lanch'><img src={cat} alt="git" /><span>Continue with GitHub</span></button>
                            <button className='get__lanch'><img src={bitbuck} alt="git" /><span>Continue with Bitbucket</span></button>
                            <p className="get__text">Or prefix any GitLab, GitHub or Bitbucket URL with</p>
                            <a href="#link" className="get__pod">gitpod.io/#</a>
                        </div>
                        <div className="get__first">
                            <h5 className="get__head">Launch an example workspace</h5>
                            <p className="get__text">Dive into one of our example workspaces</p>
                            <ul className="get__list">
                                <li className="get__item">
                                    <img src={Ts} alt="ts" className="get__ph" />
                                    <span className='get__t'>Node or TypeScript</span>
                                    <span className='get__b'>Launch workspace</span>
                                </li>
                                <li className="get__item">
                                    <img src={Pton} alt="ts" className="get__ph" />
                                    <span className='get__t'>Node or TypeScript</span>
                                    <span className='get__b'>Launch workspace</span>
                                </li>
                                <li className="get__item">
                                    <img src={Go} alt="ts" className="get__ph" />
                                    <span className='get__t'>Node or TypeScript</span>
                                    <span className='get__b'>Launch workspace</span>
                                </li>
                                <li className="get__item">
                                    <img src={Rust} alt="ts" className="get__ph" />
                                    <span className='get__t'>Node or TypeScript</span>
                                    <span className='get__b'>Launch workspace</span>
                                </li>
                                <li className="get__item">
                                    <img src={java} alt="ts" className="get__ph" />
                                    <span className='get__t'>Node or TypeScript</span>
                                    <span className='get__b'>Launch workspace</span>
                                </li>
                                <li className="get__item">
                                    <img src={svelt} alt="ts" className="get__ph" />
                                    <span className='get__t'>Node or TypeScript</span>
                                    <span className='get__b'>Launch workspace</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Get