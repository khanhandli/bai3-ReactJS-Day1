import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import List from './components/List';

class Baitap2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [], // id: unique(khong trung), name, status,
            isDisplayForm: false,
            taskEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyWord: '',
            sort: {
                by: 'name',
                value: 1
            }
        }
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')){
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({
                tasks: tasks
            })
        }
    }

    // OnGenerateData = () => {
    //     let tasks = [
    //         {
    //             id: this.generateID(),
    //             name: 'Nguyen nhu y',
    //             status: true
    //         },
    //         {
    //             id:  this.generateID(),
    //             name: 'Nguyen nhu u',
    //             status: true
    //         },
    //         {
    //             id:  this.generateID(),
    //             name: 'Nguyen nhu A',
    //             status: false
    //         }
    //     ]
    //     this.setState({
    //         tasks: tasks
    //     })

    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +this.s4();
    }

    onToggleForm = () => { //them task
        if(this.state.isDisplayForm && this.state.taskEditing !== null) {
                this.setState({
                    isDisplayForm: true,
                    taskEditing: null
                })
        }
            else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing: null
            })
        }
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
         })
    }
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
         })
    }
    onSubmit = (data) => {
        var { tasks } = this.state  // tasks = this.state.tasks
        if(data.id === '' && data.name !== '') {
            data.id = this.generateID();
            tasks.push(data);
        } else {
            var index = this.findIndex(data.id);
            tasks[index] = data
        }
        // var task = {
        //     id: this.generateID(),
        //     name: data.name,
        //     status:  data.status
        // }
        console.log(data)
        this.setState({
            tasks: tasks,
            taskEditing: null
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    findIndex= (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index
            }
        });
        return result;
    }
    onUpdateStatus = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            tasks[index].status = !tasks[index].status
        
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    }
    onDelete =(id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            tasks.splice(index, 1)        
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        this.onCloseForm();
    }
    onUpdate = (id) =>{
        var { tasks } = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        })
        this.onShowForm();
    }

    onFillter= (filtername, filterstatus) => {
        console.log(filtername + '-' + filterstatus)
        filterstatus = parseInt(filterstatus, 10)
        this.setState({
            filter: {
                name: filtername.toLowerCase(),
                status: filterstatus
            }
        })

    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    render() {
        var { tasks, isDisplayForm, taskEditing, filter, keyword } = this.state
        if(filter) {
            if(filter.name){
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                })
            }
            tasks = tasks.filter((task) => {
                if(filter.status === -1) {
                    return task;
                } else {
                    return task.status === (filter.status == 1 ? true : false)
                }
            })
        }
        if(keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
                
            })
        }

        var elmForm = isDisplayForm === true ?  
        <TaskForm 
        onSubmit = { this.onSubmit }
        onCloseForm = { this.onCloseForm }
        task={taskEditing}
         /> : ''
        ;
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        { elmForm }
                    </div>
                    <div className= {isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" 
                                className="btn btn-primary"
                                onClick={this.onToggleForm}
                                >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        
                        {/* search-sort */}
                        
                        {/* search */}
                            <Control onSearch = {this.onSearch}/>
                           {/* sort */}
                        
                        {/* list */}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <List tasks={ tasks } 
                                onUpdateStatus= { this.onUpdateStatus }
                                onDelete= { this.onDelete }
                                onUpdate = {this.onUpdate}
                                onFillter = { this.onFillter}
                                 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}

export default Baitap2