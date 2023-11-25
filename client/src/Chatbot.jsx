import './Chatbot.css';
import { useState, useEffect } from 'react';
import { getResponse } from '../../utils/LLM';

export default function Chatbot() {

    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const result = await getResponse(message);
            setResponse(result);
            alert(result);
        } catch (error) {
            console.error(error);
        }
    
                // run it in the model // don't forget to add user + chatbot response in the memory array!
        // also update the stateful memory array in local storage the same way you did it in the memory array **make the memory array only able to hold 5 chats between user and computer
        // display the input on the right
        // display output on the left

        // setMessage("");
    }
    

    useEffect(() => {
        // gather things from local storage
        // load the 5 array items into the chatbot window

    }, [])

    return (
        <div className='main'>
            <div id='chats'>
                Chats go here
            </div>
            <h1>{import.meta.env.VITE_SOME_KEY}</h1>
            <h1>{import.meta.env.VITE_OPENAI_API_KEY}</h1>
            <form onSubmit={handleSubmit} className="input-container">
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Message here'
                    id="inputText"
                    value={message}
                />
                <button
                    disabled={!message.length}
                    type="submit"
                    id="submitButton"
                    style={{ opacity: !message.length ? 0.4 : 1 }} // Set opacity based on message length
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black">
                        <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </form>
        </div>
    );
}
