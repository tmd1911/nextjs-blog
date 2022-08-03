import React from "react";

class ArrayTest extends React.Component {
    a = [
        {id:1,name:"first"},
        {id:2,name:"second"},
        {id:134,name:"third"},
    ];
    func = (a: Array<any>):JSX.Element[] => {
        return a.map((i)=><div>{i.id},{i.name}</div>)
    }
    render() {
        const nameList: JSX.Element[] = this.a.map(
            (menu) => <li key={menu.id}>{menu.name}</li>
            );
        const nameList2 = this.a.map(
            (menu) => <li key={menu.id}>{menu.name}</li>
            );
        return (
            <div>
            <ul>
                {nameList}
            </ul>
            <ul>
                {nameList2}
            </ul>
            <ul>
                {this.func(this.a)}
            </ul>
            </div>
        )
    }
}

export default ArrayTest;
