
function method1(arg: string): string {
    return "method1: " + arg;
}
let property1 = "abc";

function AppFunc() {
    return (
        <div>
            <div>{method1("my")}</div>
            <div>{property1}</div>
        </div>
    );
}

export default AppFunc;
