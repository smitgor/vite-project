import { useState } from "react";
import { useChannel } from 'ably/react';

export default function Sub() {
    
    const [messages, updateMessages] = useState([]);
    useChannel('channelName', (message) => {
        updateMessages((prev) => [...prev, message.name]);
        console.log(messages)
    });
   

    return ( 
    <>
        <p>got this data</p>
        <div>
            {messages.map(i=><p key={i}>{i}</p>)}
        </div>
    </>
    );
}
