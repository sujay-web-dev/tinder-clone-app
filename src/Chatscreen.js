import { Avatar } from '@material-ui/core';
import React from 'react'
import { useState } from 'react'
import "./Chatscreen.css"

function Chatscreen() {

    const [input, setinput] = useState('');
    const [messages, setmessages] = useState([
        {
            name:"Ranbir",
            image:'https://www.instantstories.com/uploads/stories/ranbir-kapoor/ranbir-kapoor-latest-hd-images-k3pr-lg.jpg?v=1570125006',
            message:'Whats up'
        },
        {
            name:"Ranbir",
            image:'https://www.instantstories.com/uploads/stories/ranbir-kapoor/ranbir-kapoor-latest-hd-images-k3pr-lg.jpg?v=1570125006',
            message:'Hellloooo BABE'
        },
        {
            message:'Hellloooo dude'
        },
    ]);


    const handleSend = e => {
        e.preventDefault();
        setmessages([...messages, { message:input}]);
        setinput("");
    };

    return (
        <div className="chatscreen">
            
            <p className="chatscreen__timestamp">YOU MATCHED WITH SUJAY ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatscreen__message">
                    <Avatar
                        className="chatscreen__avatar"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatscreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatscreen__message">
                        <p className="chatscreen__textuser">{message.message}</p>
                    </div>
                )
                
            ))}
            
                <form className="chatscreen__input" action="">
                    <input className="chatscreen__inputfield" value={input} onChange={e => setinput(e.target.value)} type="text" placeholder="Type a message..."/>
                    <button onClick={handleSend} type="submit" className="chatscreen__inputbutton">SEND</button>
                </form>
            
        </div>
    )
}

export default Chatscreen
