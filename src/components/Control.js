import React, { Component } from 'react';
import Search from '../components/Search';
import TaskSort from '../components/TaskSort';
class Control extends Component {
    render() {
        return(
            <div className="row mt-15">
                <Search onSearch = {this.props.onSearch}/> 
                <TaskSort /> 
            </div>    
        )
    }
}

export default Control