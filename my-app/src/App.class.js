import React from "react";

class AppClass extends React.Component {
    method1 = () => {
      return "method1";
    }
    variable1 = "text1";
    variable2 = "text2";

    render() {
        return (
          <div>
            <p>{this.method1()}</p>
            <p>{this.variable1}</p>
          </div>
        );
      }
}

export default AppClass;
