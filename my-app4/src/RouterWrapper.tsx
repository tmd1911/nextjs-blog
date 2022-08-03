import { render } from "@testing-library/react";
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import RouterMain from "./RouterMain";
class RouterWrapper extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <RouterMain />
            </BrowserRouter>
        )
    }
}
export default RouterWrapper;
