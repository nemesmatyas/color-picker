import React, { Component } from 'react';
import './Palette.styles.css';

import Navbar from './Navbar.component';
import ColorBox from './ColorBox.component';

class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 500
        };
    }

    changeLevel = newLevel => {
        this.setState({
            level: newLevel
        })
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = this.props.palette.colors[level].map(color => <ColorBox background={color.hex} name={color.name} />)
        return (
            <div className="palette">
                <Navbar level={level} changeLevel={this.changeLevel} />

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