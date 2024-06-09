import React from 'react';
import Resturant from './component/Basics/Restaurant';
import  UseState from "./component/Hooks/useState";
import UseEffect from "./component/Hooks/useEffect"
import UseReducer from './component/Hooks/useReducer';
import Todoreact from './component/Todoreact/todo';
import Temp from "./component/weather/temp";
const App = () => {
  return (
    <div>
      {/* <MyName/>.....nested components */}
      {/* <h1 className="myclassname">Hello,How are you?{3+3} </h1>
      <p>You are awesome!</p>
      <img src="" alt=""/> */}
     {/* <Restaurant/>; */}
     {/* <UseState/>; */}
     {/* <UseEffect/>; */}
     {/* <UseReducer/>; */}
     {/* <Todoreact/> */}
     <Temp/>
    </div>
  )
};
// const MyName=()=>{
//   return <h1> Hetvi Modi</h1>;
// };

export default App
