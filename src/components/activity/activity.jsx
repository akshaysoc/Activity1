import React, { useState } from 'react';
import "./even.css"

function Activity() {
    const [count, setCount] = useState(0);
    const [even, getCount] = useState(0);
return(
    <div style={{marginLeft:'100px', marginTop:'100px'}}>
        <div className='click'>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <br/><br/>
        <div className='even'>
        <p>COUNT BY 2</p>
        <div style={{width:'50px', backgroundColor:'white', textAlign:'center'}}>{even}</div><br/>
        <button onClick={() => getCount(even + 2)}>Even ADD</button>
        </div>
    </div>  
    
)
}
export default Activity;