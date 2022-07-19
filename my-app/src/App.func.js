const method1 = () => {
  return "method1";
}
let variable1 = "text1";

function AppFunc() {
  return (
    <div>
      <p>{method1()}</p>
      <p>{variable1}</p>
    </div>
  );
}

export default AppFunc;
