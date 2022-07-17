import React, {Component} from 'react';
import './header.css';
import styled from 'styled-components';

const HeaderDiv = styled.div`
display: flex;
justify-content: flex-start;
padding-top: 3rem;
padding-bottom: 3rem;
padding-right: 2rem;
padding-left: 2rem;
> span {
    font-size: 2rem;
    font-weight: bold;
    color: white;
}
`;


class Header extends Component {
    render() {
        return <HeaderDiv>
            <span>{this.props.headerMessage}</span>
        </HeaderDiv>
    }
}

export default Header;
