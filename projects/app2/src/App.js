// import logo from './logo.svg';
// import './App.css';
// import {createContext, useState} from 'react';
// import ChildComponentA from './comp/childA';
// import ChildComponent from './comp/childComponent';

// export const AppContext = createContext();

// function App() {
//   const [message,setMessage]= useState("Hello from the App Component");
//   return (
//     <AppContext.Provider value={{message,setMessage}}>
//       <div className="App">
//         <h1>Parent Component</h1>
//         <ChildComponentA message={message} setMessage={setMessage}/>
//         <ChildComponent />
//       </div>
//     </AppContext.Provider>
//   );
// }
// export default App;

import './App.css';
import { createContext, useState } from 'react';
import Items from './comp/demoList';

import ChildComponent from './comp/childComponent';
import MySampleForm from './comp/formDemo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './route/home';
import Blogs from './route/blog';
import Contacts from './route/contact';
import Nopage from './route/nopage';
import Layout from './route/layout';
//it is a constant variable AppContext that holds a context object created using React’s createContext function.
export const  AppContext = createContext();

function App() {
  const [message , setMessage] = useState("Hello from App Component !!!!");
  return (
    <AppContext.Provider  value={{ message , setMessage }}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/contact" element={<Contacts/>}></Route>
          <Route path="*" element={<Nopage/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      <h1>Parent Component</h1>
     
      <ChildComponent />
      {<Items />}
     
      <MySampleForm />
    </div>
    </AppContext.Provider>
  );
}

export default App;
