import React from "react";
import {Routes,Route,Link} from 'react-router-dom';
import Main from "./components/Main";
import First from "./components/First";
import Second from "./components/Second";
import Home from "./components/Home";
class RouterMain extends React.Component {
    render() {
        return (
            <div>
                RouterMain
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/first">First</Link></li>
                    <li><Link to="/second">Second</Link></li>
                    <li><Link to="/home">Home</Link></li>
                </ul>

                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/first" element={<First/>} />
                    <Route path="/second" element={<Second/>} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </div>
        )
    }
}
export default RouterMain;
