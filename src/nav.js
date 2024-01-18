import React, { Component } from 'react'

// This creates the Nav class used for the NavBar on the top of the App.  

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>More Information</li>
                </ul>
            </nav>
        )
    }

}
