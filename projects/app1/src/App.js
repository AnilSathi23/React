import logo from './logo.svg';
import './App.css';
import DemoFun from './comp/demoFun';
import Hello from './class/Hello';
import MyComponet from './class/classState';
import Data from './comp/appDemo';
import MyFun from './comp/myfun';
import Tool from './comp/propsDemo';


function App() {
  return (
    <div className="App">
      <h1>App.js is my Root Component</h1>
      <DemoFun />
      <Hello />
      <MyComponet />
      <Data />
      <MyFun name='Anil Kumar Reddy Sathi'/>
      <Tool name="Peter Parker"/>
    </div>
  );
}

export default App;
