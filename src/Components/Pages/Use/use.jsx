import React from 'react';
import './use.scss'
// import axios from 'axios';
import Profil from '../../Assets/Img/profile.png'
import gitlab from '../../Assets/Img/gitlab.png'
import fricod from '../../Assets/Img/fricode.png'
import wove from '../../Assets/Img/wove.png'
import google from '../../Assets/Img/google.png'
import amazon from '../../Assets/Img/amazon.png'
import fecebok from '../../Assets/Img/facebook.png'
import uber from '../../Assets/Img/uber.png'
import intel from '../../Assets/Img/intel.png'
import thea from '../../Assets/Img/thea.png'
import codeins from '../../Assets/Img/codeinstit.png'
import geks from '../../Assets/Img/giks.png'

function User() {

    // const [use, setuser] = React.useState([])

    // React.useEffect(() => {
    //     (async () => {
    //         const res = await axios.get('https://reqres.in/api/users?page=1')

    //         setuser(res?.data)
    //     })()
    // }, [])

    // console.log(use);

    return (
        <>
            <section className="use">
                <div className="container">
                    <h4 className="use__heading">Used by 400,000+ developers.</h4>
                    <ul className="use__list">
                            <li className="use__item">
                                <p className="use__text">GitPod is incredibly cool. <br /><br />In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
                                <div className="use__flex">
                                    <img src={Profil} alt="" className="use__pic" />
                                    <div className="use__info">
                                        <h4 className="use__name">Ben Halpern </h4>
                                        <p className="use__mal">Creator and Co-founder</p>
                                        <p className="use__mon">@ThePracticalDev</p>
                                    </div>
                                </div>
                            </li>
                            <li className="use__item">
                                <p className="use__text">GitPod is incredibly cool. <br /><br />In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
                                <div className="use__flex">
                                    <img src={Profil} alt="" className="use__pic" />
                                    <div className="use__info">
                                        <h4 className="use__name">Ben Halpern </h4>
                                        <p className="use__mal">Creator and Co-founder</p>
                                        <p className="use__mon">@ThePracticalDev</p>
                                    </div>
                                </div>
                            </li>
                            <li className="use__item">
                                <p className="use__text">GitPod is incredibly cool. <br /><br />In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
                                <div className="use__flex">
                                    <img src={Profil} alt="" className="use__pic" />
                                    <div className="use__info">
                                        <h4 className="use__name">Ben Halpern </h4>
                                        <p className="use__mal">Creator and Co-founder</p>
                                        <p className="use__mon">@ThePracticalDev</p>
                                    </div>
                                </div>
                            </li>
                            <li className="use__item">
                                <p className="use__text">GitPod is incredibly cool. <br /><br />In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
                                <div className="use__flex">
                                    <img src={Profil} alt="" className="use__pic" />
                                    <div className="use__info">
                                        <h4 className="use__name">Ben Halpern </h4>
                                        <p className="use__mal">Creator and Co-founder</p>
                                        <p className="use__mon">@ThePracticalDev</p>
                                    </div>
                                </div>
                            </li>
                            <li className="use__item">
                                <p className="use__text">GitPod is incredibly cool. <br /><br />In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
                                <div className="use__flex">
                                    <img src={Profil} alt="" className="use__pic" />
                                    <div className="use__info">
                                        <h4 className="use__name">Ben Halpern </h4>
                                        <p className="use__mal">Creator and Co-founder</p>
                                        <p className="use__mon">@ThePracticalDev</p>
                                    </div>
                                </div>
                            </li>
                    </ul>
                    <div className="use__logos">
                        <img src={gitlab} alt="git" className="use__logo" />
                        <img src={fricod} alt="git" className="use__logo" />
                        <img src={wove} alt="git" className="use__logo" />
                        <img src={google} alt="git" className="use__logo" />
                        <img src={amazon} alt="git" className="use__logo" />
                        <img src={fecebok} alt="git" className="use__logo" />
                        <img src={uber} alt="git" className="use__logo" />
                        <img src={intel} alt="git" className="use__logo" />
                        <img src={thea} alt="git" className="use__logo" />
                        <img src={codeins} alt="git" className="use__logo" />
                        <img src={geks} alt="git" className="use__logo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default User;