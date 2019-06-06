import React, { Component } from 'react';
import Star from './Star';

export default class Rating extends Component {
	state = {
		active: []
	};
	
	UNSAFE_componentWillMount() {
	//componentWillMount(){
		//let imsiActive = []
		//{[...Array(this.props.max).keys()].map(n => (
		//	imsiActive.push(this.props.amount > n)
		//))}
		//this.setState({ active : imsiActive });
		//console.log(imsiActive)

		const active =  [...Array(this.props.max).keys()].map(n => {
			return this.props.amount > n
		})
		this.setState({active})
	}

	componentDidMount() {
	}
	componentWillReceiveProps() {
	}

	onChildClick = (index, status) => {
		// const { active } = this.state;
		// active[index] = active;
		// this.setState({ 
		// 	active: [ 
		// 		...active.slice(0, index), 
		// 		status, 
		// 		...active.slice(index + 1) ] 
		//  }, () => console.log(this.state))

		let returnStatus
		const active =  [...Array(this.props.max).keys()].map(n => {
			returnStatus =
			status
				? n <= index
				: n < index
			// if(status === true){
			// 	returnStatus = n <= index
			// }else{
			// 	if(n < index){
			// 		returnStatus = true
			// 	}else{
			// 		returnStatus = false
			// 	}
			// }
			return returnStatus
		})
		this.setState({active})

		//console.log('1')
		// let imsiActiveI = []
		// {[...Array(this.props.max).keys()].map(ne => (
		// 	//e && ne-1 < n ? imsiActiveI.push(true) : imsiActiveI.push(false)
		// 	e // true
		// 	? ne-1 < n
		// 		? imsiActiveI.push(true)  // 클릭한것을 포함 그보다 작을 경우
		// 		: imsiActiveI.push(false)
		// 	: 
		// 	ne < n
		// 		? imsiActiveI.push(true)  // 클릭한것을 포함 그보다 작을 경우
		// 		: imsiActiveI.push(false)
		// ))}
		// this.setState({active : imsiActiveI}, () => console.log("active : ",this.state.active) )
		//console.log(imsiActiveI)
		//this.setState({ active : '' });
		//this.setState({ active : imsiActiveI });
		//console.log(this.state.active)
		//let imsiActive = []
		//{this.state.active.map(ne => (
		//	e && ne < n ? console.log('d') : console.log('c')
		//))}
	};

	render() {
		return (
			<div className="rating">
				{[...Array(this.props.max).keys()].map(n => (
					<Star 
						onParentClick={this.onChildClick} 
						key={`star${n}`} 
						//active={this.props.amount > n} 
						active={this.state.active[n]}
						index={n} 
					/>
				))}
			</div>
		);
	}
}
