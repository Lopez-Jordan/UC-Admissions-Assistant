import './Chatbot.css';

export default function Chatbot() {
    return (
        <div className='main'>
            <div id='chats'>
                Chats go here
            </div>
            <div className="input-container">
                <textarea placeholder='Message here' id="inputText"></textarea>
                <button type="button" id="submitButton">⬆</button>
            </div>
        </div>
    );
}
