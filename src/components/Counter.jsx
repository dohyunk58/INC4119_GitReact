import {useState} from 'react'

export default function Counter(){
    const [count, setCount] = useState(0);

    function increase() {setCount((prev)=>prev+1);}
    function decrease() {
        if(count<=0){
            alert("최소값은 0입니다");
            return;
        }
        setCount((prev)=>prev-1);
    }
    function reset() {setCount(0);}

    return(
        <div>
            <h2>카운터: {count}</h2>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={reset}>초기화</button>
        </div>
    );
}