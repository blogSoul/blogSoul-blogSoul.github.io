import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 0px 30px;
`;

const Banner = styled.div`
    padding: 10px;
    width: 100%;
    height: 300px;
    background-color: green;
    border-radius: 20px;
    margin-bottom: 30px;
`;

const Section = styled.div`
    background-color: pink;
    height: 100px;
    padding: 15px 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    font-size: 30px;
`;

class Home extends Component {
    render() {
        return (
            <Container>
                <Banner></Banner>
                <Section>
                    this is home
                </Section>
                <Section>
                    this is home
                </Section>
                <Section>
                    this is home
                </Section>
            </Container>
        );
    }
}

export default Home;