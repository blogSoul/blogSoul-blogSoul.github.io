import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    height: 70px;
    width: 100%;
    padding: 20px 30px;
    position: fixed;
    top: 0;
    left: 0;
`;

const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Item = styled.div`
    height: 20px;
    font-size: 20px;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/detail"}>
                <Link to="/detail">Detail</Link>
            </Item>
            <Item current={pathname === "/"}>
                <Link to="/">Home</Link>
            </Item>
            <Item current={pathname === "/profile"}>
                <Link to="/profile">Profile</Link>
            </Item>
        </List>
    </Header>
));