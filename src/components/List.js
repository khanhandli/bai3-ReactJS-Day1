import React, { Component } from 'react';
import Item from '../components/Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 // tat ca: -1, kich hoat: 1, an: 0
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFillter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name] : value
        });

    }
    render() {
        var { tasks } = this.props
        var {filterName, filterStatus} = this.state
        var elmTasks = tasks.map((arr, index) => {
            return <Item key= { arr.id }
                            index = {index} task = {arr}
                            onUpdateStatus = {this.props.onUpdateStatus}
                            onDelete= { this.props.onDelete }
                            onUpdate = {this.props.onUpdate}
            />
        })
        return(
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text"
                             className="form-control"
                             name='filterName'
                             value ={ filterName}
                             onChange = {this.onChange}
                             />
                        </td>
                        <td>
                            <select className="form-control"
                                name='filterStatus'
                                value ={ filterStatus}
                                onChange = {this.onChange}
                            >
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { elmTasks }
                </tbody>
            </table>
        )
    }
}

export default List