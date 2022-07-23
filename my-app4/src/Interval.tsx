import React from "react";
interface Props {
}
class States {
    a = [{id:0,name:"first"},];
}
class Interval extends React.Component<Props, States> {
    state = new States()
    constructor(props: Props) {
        super(props);
    }
    tick() {
        let a = this.state.a;
        this.setState({a:[...a,{id:a.length,name:"sss"+a.length}]})
    }
    timerId: any = null
    componentDidMount() {
        this.timerId = setInterval(this.tick.bind(this),1000);
    }
    componentWillUnmount() {
        if (this.timerId) {clearInterval(this.timerId)}
    }
    render() {
        return (
            <div>
                {this.state.a.map((i)=><div key={i.id}>{i.id},{i.name}</div>)}
            </div>
        )
    }
}
export default Interval;
