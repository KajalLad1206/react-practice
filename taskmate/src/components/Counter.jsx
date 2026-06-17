import { useState } from 'react';
import './counter.css';

export const Counter = () => {

    const [count, setCount] = useState(18);
    const [text, setText] = useState('Kajal');
    const [liked, setLiked] = useState(true)
    
    function handleAdd(){
        setCount(count+1);
    }
    function handleAdd(){
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }
    function handleSub(){
        setCount(count-1);
    }
    
    function handleChange(e) {
        setLiked(e.target.checked);
     }

    return (
        <div className="App">
        <div className="box">  
            <h1>Practical-1  UseState Demo </h1>
            <input value={text}  onChange={e => setText(e.target.value)}/>           
            <p>Hello, {text}. You are {count}.</p>     
            
            <p>{count}</p>
            <button onClick={()=> setCount( count + 1 )} className='add'>ADD</button>
            <button onClick={handleAdd} className='add'> ADD+3 </button>
            <button onClick={handleSub} className='sub'> SUB </button>
            <button onClick={()=> setCount(0)} className='reset'>RESET</button>
            <br/>
            <label>
                <input type="checkbox" checked={liked} onChange={handleChange} />
                I liked this
            </label>
            <p>You {liked ? 'liked' : 'did not like'} this.</p>

        </div>
        </div>
    );
  
}
