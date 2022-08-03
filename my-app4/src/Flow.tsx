import React from "react";
import AppCounter from "./AppCounter";
interface Props {b: boolean}
class States {b = false}
class Flow extends React.Component<Props, States> {
    state = new States()
    constructor(props: Props) {
        super(props);
        this.state.b = props.b
    }
    render() {
        let l: JSX.Element = <AppCounter start={this.state.b ? 10 : 20}/>
        // let m: JSX.Element = <AppCounter start={if (this.state.b) {return 10} else {20}}/>
        let ls: JSX.Element[] = [l,l]
        if (this.state.b) {
            ls.push(l)
        }
        switch (ls.length) {
            case 1:ls.push(l);break;
            default:ls.push(...ls);break;
        }
        return (
            <div>
                <div>{l}</div>
                {ls}
                {ls.length > 3 && 
                    <h2>
                        {"length > 3"}
                    </h2>
                }
            </div>
        )
    }
}
export default Flow;
