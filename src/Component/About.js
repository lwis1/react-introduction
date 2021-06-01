import React, { Component, Fragment } from "react";

export default class Contact extends Component{
    render(){
        return(
            <Fragment>
                <h1>About</h1>
            <p>My name is Abidi Wissem i'm a senior technician in industrial data processing specialist in systems and automation. </p><br/>
            <img src="/images/Wissem.jpg" alt="Wissem" width="500" height="400"/>
            <p>I graduated in 2016,i didn't work with it, i like programing, coding and developing solutions but it is not easy to be professionel in developing without getting work in </p><br/>
            <p>I listen about Gomycode n i feel interested to be a web deveper hope i will do</p><br/>
            <p>this is a video of my new formation in GoMyCode:</p><br/>
            <iframe
                 width="300"
                 height="250"
                 src="https://www.youtube.com/embed/zcTFG_F0FRs"
            />
            </Fragment>
        )
    }
}