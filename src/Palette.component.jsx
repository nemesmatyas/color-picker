import React, { Component } from 'react';
import './Palette.styles.css';

import ColorBox from './ColorBox.component';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => <ColorBox background={color.color} name={color.name} />)
        return(
            <div className="palette">
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