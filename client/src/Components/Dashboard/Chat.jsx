import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Axios from "axios";


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

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.values(chats).every(value => value.length > 0)) {
            await Axios.post("https://jmi-hostel-management-server.onrender.com/chats", chats)
                .then(res => {
                    if (res.data === "Message sent") {
                        toast.success("Sent!", {
                            position: "top-center"
                        })
                        setChats({
                            chat: "",
                        })
                    } else {
                        toast.error("Error!", {
                            position: "top-center"
                        })
                    }
                })
        }
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
                    <button class="submit-button" type="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        </chat>
    )
}

export default Chat;