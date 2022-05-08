import React, { Component } from 'react';
import './switch.css';


interface SwitchState {
    isTurnon: boolean,
}

interface SwitchProp {

}

class Switch extends Component<SwitchProp, SwitchState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isTurnon: true,
        };
    }

    toggle() {
        this.setState({
            isTurnon: !this.state.isTurnon,
        })
    }

    getClassName() {
        let isTurnon = this.state.isTurnon;
        return `switch ${isTurnon ? '': 'off'}`;
    }

    render(): React.ReactNode {
        return (
            <div 
                onClick={() => this.toggle()}
                className={this.getClassName()}
            ></div>
        )
    }

}

export default Switch;