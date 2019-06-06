import React, { Component } from 'react';

export default class Star extends Component {
	// state = {
	// 	active: this.props.active
	// };

	componentWillReceiveProps(nextProps) {
		//console.log('componentWillReceiveProps');
		//console.log(nextProps);
		//this.setState({ active: this.props.active });
		// this.setState({active : this.props.active}, () => console.log("Start.js was changed state : ",this.state.active) )
	}
		/*
		getSnapshotBeforeUpdate(prevProps, prevState) {
			console.log(prevState);
			console.log(this.state);
			return true
		}
		componentDidUpdate(prevProps, prevState, snapshot) {
			console.log(prevProps)
			console.log(prevState)
			console.log(snapshot)
		}
		static getDerivedStateFromProps(nextProps, prevState) {
			if (nextProps.value !== prevState.value) {
				return { value: nextProps.value };
			}
			return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
		}
		shouldComponentUpdate(nextProps, nextState) {
			// return false 하면 업데이트를 안함
			// return this.props.checked !== nextProps.checked
			console.log(nextProps, nextState)
			return true;
		}
		*/

	onClickHandler = e => {
		const value = !this.props.active;
		// this.setState({ active: value });
		this.props.onParentClick(this.props.index, value);
	};

	render() {
		return (
			<div className="star" onClick={this.onClickHandler}>
				{this.props.active ? '★' : '☆'}
			</div>
		);
	}
}
