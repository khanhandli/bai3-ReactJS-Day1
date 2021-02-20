import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	dieuKien(product) {
		if(product.view) {
			return	<h2>
						name: { product.name } <br/>
						Ngày sinh: {product.birth} <br/>
						Xác thực: { product.isSacces ? 'Xác thực thành công' : 'Xác thực thất bại'}
					</h2>
		};
	}
	render() {
		let a = 5;
		let b = 10;
		let name = 'Nguyễn Như Ý';
		let obj = {
			id: 1, 
			name: 'Nguyễn Như Ý',
			birth: 20,
			isSacces: false,
			view: true
		}
		let sinhVien = [
			{ 
				id: 1,
				name: 'Nguyễn Như Ý',
				age: 20
			},
			{ 
				id: 2,
				name: 'Nguyễn Văn B',
				age: 22
			},
			{ 
				id: 3,
				name: 'Nguyễn Thị C',
				age: 25
			}
		];

		const dsSinhvien = sinhVien.map((arr, index) => {
			return <div key= { arr.id }>
						<u> Name: { arr.name }</u> <br/>
						<i> Name: { arr.age }</i>
					</div>
		})
		return (
			<div className="App">
				Hello world
				<h1>
						A: { a }  <br/>
						B: { b }  <br/>
						Name: { name } <br/>
					<u>
						A x B = { a * b }
					</u> <br/>
				</h1>
				{ this.dieuKien(obj) }
				{ 
					dsSinhvien
				}
			</div>
		);
	};
}

export default App;
