import * as React from "react";
interface Props {
    start: number
}
class State {
    count: number = 0
}
class AppCounter extends React.Component<Props, State> {
    state = new State()
    constructor(props: Props) {
        super(props);
        this.state.count = props.start;
    }
    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
        return (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Click</button>
          </div>
        );
    }
}
export default AppCounter;
