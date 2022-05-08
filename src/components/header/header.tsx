import React, { Component } from 'react';

import Switch from '../switch/switch';
import './header.css';


class Header extends Component {

    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    render(): React.ReactNode {
        return (
            <header className="header">
                <div className="group">
                    <div className="logo">
                        <b>Notes</b>
                    </div>
                    <ul className="nav">
                        <li><a href="/">home</a></li>
                        <li><a href="/about">about</a></li>
                    </ul>
                </div>
                <div className="group">
                    <div className="dark-switch">
                        <Switch></Switch>
                    </div>
                    <div className="search">
                        <input type="text" />
                    </div>
                </div>


            </header>
        )
    }
}


export default Header;