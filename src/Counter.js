import React from 'react';

// 클래스 컴포넌트
// 1. React.Component 상속, 2: render 오버라이딩해서 React Element를 리턴
// 3. 속성앞에 this
export class Counter extends React.Component {
	state = {
		score: 30,
		num: 1
	}

	increment = () => {
		console.log('increment');
		// this.state.score += 1; // UI 렌더링이 안된다.
		// 1. 반드시 setState로 상태 변경
		// 2. 비동기로 동작하므로 콜백 펑션으로 상태 변경을 하라.
		// 3. 머지된다. (오버라이트 된다.)
		this.setState((prevState) => ({
			score: prevState.score + 1
		}));
	}

	// 리액트 이벤트: 선언형 스타일: 함수 선언문을 우측에 배치
	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}> + </button>
			</div>
		);
	}
}