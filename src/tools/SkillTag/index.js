import React from 'react'

import './index.css';

import styled from 'styled-components';


// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Tag = styled.div`
  padding: 15px;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const SkillTag = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, my name is Forty</h1>
            </header>
            <div className="content">
                <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default SkillTag
