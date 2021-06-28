import React from "react";

class ButtonComponent extends React.Component {
    accordionClick(buttonType) {
        this.props.getValue(buttonType);
    }
    render() {
        console.log(this.props);
        return (
            <button
                aria-expanded={this.props.flagValue}
                className={this.props.className}
                aria-controls={this.props.aria}
                id={this.props.id}
                onClick={this.accordionClick.bind(this, this.props.buttonType)}
            >{this.props.name}

            </button>
        )


    }
}

export default ButtonComponent;