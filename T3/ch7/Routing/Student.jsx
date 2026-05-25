import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Shome"
import Project from "./Sproject"
import Nopage from "./Snopage"
import img1 from "../assets/hero.png"

function Student() {

    const s = [{ name: "ABC", course: "CSE", Education: "Undergraduate" }]
    const p = [{ pname: "My portfolio 1", desc: "its gives detailed information of my project 1", img: img1 }, { pname: "My portfolio 2", desc: "its gives detailed information of my project 2", img: img1 }, { pname: "My portfolio 3", desc: "its gives detailed information of my project 3", img: img1 }]
    return (
        <div>
            <Router>
                <nav>
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'sans-serif',
                        position: 'relative'
                    }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Project">Project</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home data={s} />} />
                    <Route path="/Project" element={<Project data={p} />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Student