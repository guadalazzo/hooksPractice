import React, {useState} from 'react';
const inputElement = () => {
    const [inputText, setInputText] = useState("");
    const [ historyList, setHistoryList ] = useState([]);
    return (
    <div>
         <input onChange={e => {
             setInputText(e.target.value);
             setHistoryList([...historyList,e.target.value])
             }} placeholder="enter some text" />
         <br/>
         {inputText}
         <hr/>
         <ul>
            {historyList.map(history => {
                return <li>{history}</li>
            })}
         </ul>
    </div>
    );
}

export default inputElement;