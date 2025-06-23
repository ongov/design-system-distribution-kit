import React from "react";
import "./App.css";
import { TwitterPicker } from "react-color";

const colorsList = {
    teal: '#367a66',
    gold: '#86743d',
    yellow: '#8a600d',
    taupe: '#7b725c',
    lime: '#5f8129',
    sky: '#1080a6',
    purple: '#92278f'
};

const colourValues = Object.values(colorsList);

class CalloutColourPicker extends React.Component {
    state = {
        color: colorsList.teal,
    };

    getKeyByValue = (object, value) => {
        console.log(object);
        console.log(value);
        return Object.keys(object).find(key => object[key] === value);
    }

    addHighLightClass = (classToAdd, targetClass) => {
        var elements = document.getElementsByClassName(targetClass);
        elements.length &&
            elements.forEach((element) => {
                element.className = targetClass + " " + classToAdd;
            });
    };

    handleChangeComplete = (color) => {
        var colorName = this.getKeyByValue(colorsList, color.hex);
        var classToAdd = "ontario-border-highlight--" + colorName;
        this.addHighLightClass(classToAdd, "ontario-callout");
        this.addHighLightClass(classToAdd, "ontario-aside");
        this.setState({ color: color.hex });
    };

    render() {
        return (
            <TwitterPicker
                triangle="hide"
                colors={colourValues}
                color={this.state.color}
                onChangeComplete={this.handleChangeComplete}
            />
        );
    }
}

export default CalloutColourPicker;
