import React from "react";
import "./App.css";
import { TwitterPicker } from "react-color";

const colors = ["#0066CC", "#1A1A1A", "#666666"];
class IconsColourPicker extends React.Component {
    state = {
        color: colors[0],
    };

    handleChangeComplete = (color) => {
        document.body.style.color = color.hex;
        this.setState({ color: color.hex });
    };

    render() {
        return (
            <TwitterPicker
                triangle="hide"
                colors={colors}
                color={this.state.color}
                onChangeComplete={this.handleChangeComplete}
            />
        );
    }
}

export default IconsColourPicker;
