 import "./Navbar.css"


 export function Team({onMouseEnter, onMouseLeave}) {
    return <div className = "team-dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <ul>
            <li>
                <a href = "/stats"> Stats </a>
                </li>
                <li>
                <a href = "/roster"> Roster </a>
                </li>
                <li>
                <a href = "/hockey-operations"> Hockey Operations </a>
                </li>
                <li>
                <a href = "/executive-board"> Executive Board </a>
                </li>
        </ul>
    </div>
}

