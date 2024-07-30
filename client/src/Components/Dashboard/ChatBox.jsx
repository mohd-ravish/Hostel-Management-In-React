import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {handleChatSubmit} from '../../ApiHandler/chatsFunctions'

function Chat() {
    const [chats, setChats] = useState({
        chat: "",
    })

    const handleChatChange = (e) => {
        const { value, name } = e.target
        setChats((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    return (
        <chat>
            <ToastContainer />
            <div class="chat-container">
                <h3 class="title">Send message anonymously</h3>
                <form>
                    <div class="input-box">
                        <input type="text" class="message-chat" name="chat" value={chats.chat} placeholder="Enter a message..." autocomplete="off" onChange={handleChatChange} required />
                    </div>
                    <button class="submit-button" type="submit" onClick={(e)=>{handleChatSubmit(e, chats, setChats)}}>Send</button>
                </form>
            </div>
        </chat>
    )
}

export default Chat;