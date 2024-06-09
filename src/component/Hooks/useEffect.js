import { useEffect, useState } from "react"
import "./style.css";

//As soon as i incr the value of button the count should also reflect on the top tab or favicon
const UseEffect=()=>{
    // const initialData=15;
    const [myNum, setMyNum]= useState(0);
    useEffect(()=>{
        // console.log("Hii");
        document.title=`Chats(${myNum})`;
    });
    return (
        <>
        <div className="center_div">
            <p>{myNum}</p>
            <div class="button2" onClick={()=> setMyNum(myNum+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            </div>
            </>
    )
}
export default UseEffect