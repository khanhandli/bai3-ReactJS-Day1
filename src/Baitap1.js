import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
class Baitap1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15 
        }
        this.onSetColor = this.onSetColor.bind(this)
        this.changeSize = this.changeSize.bind(this)
        this.resetValue = this.resetValue.bind(this)
    }
    onSetColor(param) {
        this.setState({
            color: param
        }) 
    }
    changeSize(value) {
        if  (this.state.fontSize + value >=8 && this.state.fontSize + value <= 36) {
            this.setState({
                fontSize: this.state.fontSize + value
            })
        }
    }
    resetValue(value) {
        if(value) {
            this.setState({
                color: 'red',
                fontSize: 15 
            })
        }
    }
    render() {
        return (
            <div className='container mt-50'>
                <div className='row'>
                    <ColorPicker color= {this.state.color} onReceiveColor= { this.onSetColor } />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting size = { this.state.fontSize } onReceiveSize = { this.changeSize } />
                        <Reset onReset= {this.resetValue} />
                    </div>
                    <Result color= {this.state.color} size = {this.state.fontSize} />
                </div>
            </div>
        )
    }
}

export default Baitap1