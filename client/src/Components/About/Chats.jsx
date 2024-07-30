import React, { useState, useEffect } from "react";
import { fetchChats } from '../../ApiHandler/chatsFunctions'

function Chats() {
    const [chats, setChats] = useState([]);

    // Show chats
    useEffect(() => {
        fetchChats(setChats);
    }, []);

    return (
        <div className="chats">
            <div class="main-card">
                {chats.map((chat) => {
                    return (
                        <div class="card-top">
                            <div class="card">
                                <div class="card-header"><span class="material-symbols-outlined icon">account_circle</span><p>Anonymous</p></div>
                                <div class="card-body">
                                    <p className="text">{chat.chat}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Chats;