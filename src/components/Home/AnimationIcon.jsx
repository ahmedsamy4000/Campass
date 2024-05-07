import React from 'react';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import homeClass from '../../Styles/Home.module.css';

const AnimationIcon = () => {
    return (
        <div>
            <AnimatedOnScroll
            animationIn="bounceInRight"
            style={{
                marginTop: "80px",
                color: "green",
            }}
            >
                <img className={homeClass.logoImg} src='camping.png' alt='logo'></img>
            </AnimatedOnScroll>
        </div>
    );
}

export default AnimationIcon;
