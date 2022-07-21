import * as React from "react";

interface AppClass2Props {
    start: number
}

class AppClass2State {
    count: number = 0
}

class AppClass2 extends React.Component<AppClass2Props, AppClass2State> {
    state = new AppClass2State()
    constructor(props: AppClass2Props) {
        super(props);
        this.state.count = props.start;
    }
    handleClick = () => { // 함수 형식의 변수 생성, this 연결가능
      this.setState({
        count: this.state.count + 1,
      });
    };
  
    handleClick2() {  // 콜백 형식의 함수 생성, bind(this) 호출 필요
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        return (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Click</button>
            <button onClick={this.handleClick2.bind(this)}>Click2</button>
          </div>
        );
    }
}

export default AppClass2;
