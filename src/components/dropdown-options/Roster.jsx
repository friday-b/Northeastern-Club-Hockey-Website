import {Player} from "./Player.jsx"
import "./Roster.css"

const players = [
    {
        number: "2",
        pic: "/images/fourns.png",
        name: "Eric Fournier",
        info: "Graduate Student / Lethbridge, AB",
        bio: "Defense / 5-9 / 165 / Left"
    },
    {
        number: "3",
        pic: "/images/bmac.png",
        name: "Sam Mackenzie",
        info: "5th Year / Burlington, VT",
        bio: "Defense / 6-3 / 205 / Right"


    },
    {
        number: "4",
        pic: "/images/tommy.png",
        name: "Thomas Malvar",
        info: "3rd Year / New Wilmington, PA",
        bio: "Forward / 5-7 / 165 / Right"

    },
    {
        number: "5",
        pic: "/images/mikey.png",
        name: "Michael Martinez",
        info: "3rd Year / Houston, TX",
        bio: "Defense / 5-11 / 170 / Left"

    },
    {
        number: "10",
        pic: "/images/dabo.png",
        name: "Cohl D'Addabbo",
        info: "4th Year / West Hartford, CT",
        bio: "Defense / 6-2 / 195 / Left"

    },
    {
        number: "12",
        pic: "/images/rhino.png",
        name: "William Rinaldi",
        info: "4th Year / Lynnfield, MA",
        bio: "Forward / 5-8 / 185 / Right"

    },
    {
        number: "14",
        pic: "/images/cros.png",
        name: "Michael Crosby",
        info: "2nd Year / Tenafly, NJ",
        bio: "Forward / 5-11 / 165 / Right"

    },
    {
        number: "15",
        pic: "/images/fry.png",
        name: "Brendan Friday",
        info: "2nd Year / Duluth, MN",
        bio: "Forward / 5-10 / 165 / Right"

    },
    {
        number: "16",
        pic: "/images/lucas.png",
        name: "Lucas Confalonieri",
        info: "4th Year / Summit, NJ",
        bio: "Forward / 6-1 / 185 / Left"

    },
    {
        number: "17",
        pic: "/images/donny.png",
        name: "Brent Donlon",
        info: "3rd Year / Rochester, NY",
        bio: "Forward / 5-9 / 180 / Left"

    },
    {
        number: "19",
        pic: "/images/byers.png",
        name: "Leo Byers",
        info: "4th Year / Andover, MA",
        bio: "Forward / 5-7 / 160 / Left"

    },
    {
        number: "20",
        pic: "/images/tmac.png",
        name: "Tyler McEvoy",
        info: "Graduate Student / Needham, MA",
        bio: "Defense / 6-2 / 205 / Left"

    },
    {
        number: "21",
        pic: "/images/bates.png",
        name: "Benjamin Bates",
        info: "4th Year / Greenwich, CT",
        bio: "Defense / 6-0 / 175 / Right"

    },
    {
        number: "22",
        pic: "/images/tilly.png",
        name: "Alexander Tilgner",
        info: "5th Year / Stowe, VT",
        bio: "Forward / 5-7 / 180 / Left"

    },
    {
        number: "23",
        pic: "/images/veins.png",
        name: "Nicholas Viens",
        info: "3rd Year / North Grafton, MA",
        bio: "Forward / 6-0 / 170 / Right"

    },
    {
        number: "25",
        pic: "/images/willy.png",
        name: "Kyle Wilson",
        info: "3rd Year / Arlington, VA",
        bio: "Forward / 5-9 / 190 / Right"

    },
    {
        number: "26",
        pic: "/images/OC.png",
        name: "Jack O'Connell",
        info: "2nd Year / Billerica, MA",
        bio: "Defense / 5-8 / 160 / Left"

    },
    {
        number: "27",
        pic: "/images/foster.png",
        name: "George Foster",
        info: "2nd Year / Darien, CT",
        bio: "Defense / 6-1 / 175 / Right"

    },
    {
        number: "29",
        pic: "/images/gags.png",
        name: "Nick Gagnon",
        info: "3rd Year / Rochester, NH",
        bio: "Goalie / 5-9 / 150 / Left"

    },
    {
        number: "30",
        pic: "/images/kov.png",
        name: "Alex Kowalewski",
        info: "4th Year / Clayton, CA",
        bio: "Goalie / 5-11 / 145 / Left"

    },
    {
        number: "32",
        pic: "/images/jenny.png",
        name: "Steve Jenson",
        info: "4th Year / San Francisco, CA",
        bio: "Goalie / 5-9 / 155 / Left"

    },
    {
        number: "44",
        pic: "/images/putty.png",
        name: "Joseph Putrim",
        info: "2nd Year / Chicago, IL",
        bio: "Forward / 6-0 / 165 / Right"

    },
    {
        number: "77",
        pic: "/images/smalls.png",
        name: "Hudson Small",
        info: "2nd Year / Marina Del Rey, CA",
        bio: "Forward / 6-0 / 175 / Left"

    }
]


export function Roster() {
    return (
        <div className="header">
        2024-2025 Northeastern Club Hockey Roster
        <div className = "roster-wrapper">
            {players.map((player, index) => (
                <Player
                    key={index}
                    number={player.number}
                    pic={player.pic}
                    name={player.name}
                    info={player.info}
                    bio={player.bio}
                    idx = {index + 1}
                    />
            ))}
        </div>
        </div>
    )
}