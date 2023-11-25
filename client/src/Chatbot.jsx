import './Chatbot.css';
import { useState, useEffect } from 'react';



export default function Chatbot() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // grab the input from the form
        // run it in the model // don't forget to add user + chatbot response in the memory array!
        // also update the stateful memory array in local storage the same way you did it in the memory array **make the memory array only able to hold 5 chats between user and computer
        // display the input on the right
        // display output on the left
    }

    useEffect(() => {
        // gather things from local storage
        // load the 5 array items into the chatbot window
    },[])

    return (
        <div className='main'>
            <div id='chats'>
                Chats go here
            </div>
            <form onSubmit={handleSubmit} className="input-container">
                <textarea placeholder='Message here' id="inputText"></textarea>
                <button type="submit" id="submitButton"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
            </form>
        </div>
    );
}
