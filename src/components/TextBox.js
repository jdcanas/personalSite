import React from "react";

class TextBox extends React.Component {

    render() {
        return (
            <div>
                <p class="left-align">{this.props.textContent}</p>
            </div>
        );
    }

}

export default TextBox;