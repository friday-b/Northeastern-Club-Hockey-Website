import { Navbar } from "./components/Navbar";
import {Schedule} from "./components/Schedule";
import {AboutUs} from "./components/AboutUs";
import {Contact} from "./components/Contact";
import {Home} from "./components/Home";
import { ExecBoard } from "./components/dropdown-options/ExecBoard.jsx"
import { HockeyOperations } from "./components/dropdown-options/HockeyOperations.jsx"
 import {Roster} from "./components/dropdown-options/Roster.jsx"
 import {Stats} from "./components/dropdown-options/Stats.jsx"
 import {Footer} from "./components/Footer.jsx"

export default function App() {
    let Component
    switch (window.location.pathname) {
        case "/":
            Component = Home
            break
            case "/schedule":
                Component = Schedule
                break
                case "/aboutUs":
                    Component = AboutUs
                    break
                    case "/contact":
                        Component = Contact
                        break   
                            case "/roster":
                                Component = Roster
                                break;
                                case "/hockey-operations":
                                    Component = HockeyOperations
                                    break;
                                    case "/executive-board":
                                        Component = ExecBoard
                                        break;
                                        case "/stats":
                                            Component = Stats
                                            break;
                                            default:
                                                <div>Not Found</div>;
    }

    return (
    <>
    <Navbar />
    <Component />
    <Footer />
    </>
    );
}
