import React from 'react'
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
 
 <form className="form">
    
    <button className='plusButton'><h1>➕</h1></button>

    <input
      className="input"
      type="text"
      placeholder="전송하려는 메시지를 입력하세요."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyDown={event => event.key === 13 ? sendMessage(event.target.value) : null}
    />
    
    <button className="sendButton" onClick={e => sendMessage(e)}>전송</button>
  </form>
)

export default Input;