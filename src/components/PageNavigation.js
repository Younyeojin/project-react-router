import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const PageNavigation = () => (
    <Nav>
        <ol><Link to="/home">My page</Link></ol>
        <ol><Link to="/home">Home</Link></ol>       
    </Nav>
);

export default PageNavigation

const Nav = styled.div`
    width: 100%;
    height: 30px;
    // border-bottom: 1px solid #d1d8e4;
`

// const NavList = styled.ul`
//     width: 1080px;
//     display: flex;
//     margin: 0 auto;
// `

// const NavItem = styled.li`
//     width: 100px;
//     margin-left: 18px;
//     margin-top: 5px;
//     display: flex;
// `
