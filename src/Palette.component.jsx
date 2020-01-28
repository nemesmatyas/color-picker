import React, { Component } from 'react';
import './Palette.styles.css';

import Navbar from './Navbar.component';
import ColorBox from './ColorBox.component';

class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 500,
            format: 'hex'
        };
    }

    changeLevel = newLevel => {
        this.setState({
            level: newLevel
        })
    }

    changeFormat = val => {
        this.setState({
            format: val
        })
    }

    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => <ColorBox background={color[format]} name={color.name} />)
        return (
            <div className="palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />

                {/* Navbar goes here */}
                <div className="palette-colors">
                    {
                        colorBoxes
                    }
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}
export default Palette;