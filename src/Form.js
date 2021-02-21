import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '12',
            txtPassword: '12',
            txtDesc: '12',
            sltGender: 1,
            rdLang: 'vi',
            chkbStatuss: true
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    onHandleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return(
            
            <div>
                <div className="container">
                 <div className="row">
                     <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                                <div className="panel-body">
                                <form onSubmit = { this.onHandleSubmit }>                                
                                    <div className="form-group">
                                        <label >Username</label>
                                        <input type="text" name="txtName" 
                                        className="form-control"
                                         placeholder="Input field"
                                         onChange = { this.onHandleChange }
                                         value={this.state.txtName}

                                          />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" name="txtPassword" 
                                        className="form-control"
                                         placeholder="Input field"
                                         onChange = { this.onHandleChange }
                                         value={this.state.txtPassword}

                                          />
                                    </div>

                                    <div className="form-group">
                                        <label >Mo ta</label>
                                           <textarea name="txtDesc"
                                            className="form-control" 
                                            rows="3" 
                                            onChange = { this.onHandleChange }
                                            required="required"
                                            value={this.state.txtDesc}
                                            
                                            ></textarea>
                                    </div>
                                    <label>Gioi tinh:</label>
                                    <select className="form-control" 
                                    required="required"
                                    name = "sltGender"
                                    value={this.state.sltGender}
                                    onChange = { this.onHandleChange }
                                    >
                                        <option value={0}>Nu</option>
                                        <option value={1}>Nam</option>
                                    </select>
                                    <br/>
                                    <label>Ngon ngu</label>
                                <div className="radio">
                                    <label>
                                        <input
                                         type="radio"  
                                         value="en"
                                         onChange = { this.onHandleChange }
                                         name = "rdLang"
                                         checked = {this.state.rdLang ==="en"}
                                          />
                                        tieng anh
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                         type="radio"  
                                         name = "rdLang"
                                        onChange = { this.onHandleChange }
                                         checked = {this.state.rdLang ==="vi"}
                                         value="vi"
                                         />
                                        tieng viet
                                    </label>

                                    <div className="checkbox">
                                        <label>
                                            <input 
                                            type="checkbox" 
                                            value={true}
                                            name ="chkbStatuss"
                                            onChange = { this.onHandleChange }
                                            checked = {this.state.chkbStatuss === true}
                                            />
                                            Trang thai
                                        </label>
                                    </div>
                                </div>
                                    <button type="submit" className="btn btn-primary">Luwu lai</button>
                                    <button type="reset" className="btn btn-default">Reset</button>
                                </form>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
                  
                  
                  
        )
    }
}

export default Form