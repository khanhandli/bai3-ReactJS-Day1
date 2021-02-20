import React, { Component } from 'react';

class Reset extends Component {
    resetValue = () => {
        this.props.onReset(true)
    }
    render() {
        return(
            <button type="button" className="btn btn-primary" onClick= { this.resetValue} >reset</button>
        );

    }
}

export default Reset