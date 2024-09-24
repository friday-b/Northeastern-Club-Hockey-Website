import {Game} from "./Game"

const games = [
    {
        logo: "/images/mc-logo.png",
        date: "Oct 6 (Sun)",
        home: "vs",
        against: "Merrimack College",
        where: "Boston, MA / Matthews Arena",
        score: "0-0",
        special: "NECHA Round 1"
    },
    {
        logo: "/images/bu-logo.webp",
        date: "Oct 12 (Sat)",
        home: "at",
        against: "Boston University",
        where: "Boston, MA / Walter Brown Arena",
        score: "0-0",
        special: "NECHA Round 1"
    },
]

export function Schedule() {
    return (
        <div>
            {games.map((game, index) => (
                                <Game
                                key={index}
                                logo={game.logo}
                                date={game.date}
                                home={game.home}
                                against={game.against}
                                where={game.where}
                                score={game.score}
                                special={game.special}
                            />
                        ))}
        

        </div>
    )
    
}