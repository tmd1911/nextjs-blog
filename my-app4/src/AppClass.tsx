import React from "react";

class AppClass extends React.Component {
    method1(arg: string): string {
        return "method1: " + arg;
    }
    property1 = "abc";
    render() {
        return (
          <div>
            <div>{this.method1("my")}</div>
            <div>{this.property1}</div>
          </div>
        );
    }
}

export default AppClass;
