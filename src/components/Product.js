import React, { Component } from 'react';

class Product extends Component {
    //CAchs 1 tao contructor neu 0 dung trueyn tham so
    constructor(props) {
        super(props);
        // this.onAddToCart = this.onAddToCart.bind(this);
    }
    //Cach 2 khong can bind
    // onAddToCart() {
    //     alert(this.props.name +  '-' + this.props.price)
    // }

    onAddToCart2 = ()  => {
            alert(this.props.name +  '-' + this.props.price)
        }
    render() {
        return (
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img src= { this.props.url } alt="" />
                            <div className="caption">
                                <h3>{ this.props.name }</h3>
                                <p>
                                    { this.props.price }
                                </p>
                                <p>
                                    <a href="#" className="btn btn-primary" onClick= { this.onAddToCart2 }>
                                    Mua hang</a>
                                    {/* cachs 1 laf () => this.onAddToCart(this.props.name) */}
                                </p>
                            </div>
                    </div>
                </div>
        )
    }
}

export default Product;