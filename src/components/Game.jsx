import "./Game.css"

export function Game(props) {
    return (
        <div className= "game">
            <ul> 
                <li className = "logo">
                <a> 
                    <img src={props.logo}/> 
                    </a>
                </li>
                <li className = "date">
                    <a>
                        {props.date}
                    </a>
                </li>
                <li className = "home">
                    <a>
                        {props.home}
                    </a>
                </li>
                <li className = "against">
                    <a>
                        {props.against}
                    </a>
                </li>

                <li className = "where">
                    <a>
                        {props.where}
                    </a>
                </li>
                <li className = "score">
                    <a>
                        {props.score}
                    </a>
                </li>
                <li className = "special">
                    <a>
                        {props.special}
                    </a>
                </li>

            </ul>


        </div>
    )

}