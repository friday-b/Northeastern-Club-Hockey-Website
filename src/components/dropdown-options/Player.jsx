import "./Player.css"; 

export function Player(props) {
    const bgColor = props.idx % 2 === 0 ? "background-grey" : "background-white";
    return (
        <div className={`player ${bgColor}`}>
            <ul className="mods"> 
                <li className = "pic">
                    <a>
                    <img src={props.pic}/>
                    </a>
                </li>
                <li className = "number">
                <a> 
                    {props.number}
                    </a>
                </li>
                <li className = "name">
                    <a>
                        {props.name}
                    </a>
                </li>
                <li className = "bio">
                    <a>
                        {props.bio}
                    </a>
                </li>
                <li className = "info">
                    <a>
                        {props.info}
                    </a>
                </li>
            </ul>


        </div>
    )
}