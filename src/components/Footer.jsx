import "./Footer.css"

export function Footer() {
    return (
        <div className = "footer">
            <ul>
                <li className= "husky">
                    <img src="/images/Husky.png"></img>
                </li>
                <li className="socials-logos">
                    <ul className="socials">
                        <li className="insta">
                            <a href="https://www.instagram.com/nu_clubhockey/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src="/images/insta.png">

                            </img>
                            </a>
                        </li>
                        <li className="twitter">
                            <a href="https://x.com/NU_ClubHockey"target="_blank" rel="noopener noreferrer"> 
                            <img src="/images/twit.png">
                        </img>
                        </a>
                        </li>
                        <li className="youtube">
                        <a href="https://www.youtube.com/channel/UCS9erx3bdrOxCmcrMkbkFXg"target="_blank" rel="noopener noreferrer"> 
                        <img src="/images/yt.png">

                        </img>
                        </a>
                        </li>
                    </ul>
                </li>
                <li className="site-map">
                    Site Map:
                    <li>
            <a href ="/schedule"> Schedule</a>
            </li>
            <li>
            <a href ="/aboutUs"> About Us</a>
            </li>
            <li>
            <a href ="/contact"> Contact</a>
            </li>
                </li>
            </ul>
        </div>
    )
}