import React, { Component } from 'react';

class TaskSort extends Component {
    onClick = (sortBy, sortValue) => {

    }
    render() {
        return(
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown1">
                        <button className="btn btn-primary dropbtn1" type="button" data-toggle="dropdown">
                            Sắp Xếp <span className="caret"></span>
                        </button>
                        <ul className="dropdown-content1">
                            <li onClick = {() => this.onClick('name', 1)}>
                                <a role="button">
                                            <span className="fa fa-sort-alpha-asc pr-5">
                                                Tên A-Z
                                            </span>
                                        </a>
                            </li>
                            <li onClick = {() => this.onClick('name', -1)}>
                                <a role="button">
                                            <span className="fa fa-sort-alpha-desc pr-5">
                                                Tên Z-A
                                            </span>
                                        </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li onClick = {() => this.onClick('status', 1)}><a role="button">Trạng Thái Kích Hoạt</a></li>
                            <li onClick = {() => this.onClick('status', -1)}><a role="button">Trạng Thái Ẩn</a></li>
                        </ul>
                    </div>
                </div>     

        )
    }
}

export default TaskSort