import React from "react";

class ArrayTest2 extends React.Component {
    a = [
        {id:1,name:"first"},
        {id:2,name:"second"},
        {id:134,name:"third"},
    ];
    func = (a: Array<any>):JSX.Element[] => {
        return a.map((i)=><div>{i.id},{i.name}</div>)
    }
    render() {
        return (
            <div>
            <ul>
                {this.func([...this.a,{id:45,name:"fourth"}])}
            </ul>
            </div>
        )
    }
}

export default ArrayTest2;
