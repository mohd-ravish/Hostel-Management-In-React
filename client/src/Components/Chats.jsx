import Header from "./Header";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Chats() {
    const [chats, setChats] = useState([]);

    // Show Data
    useEffect(() => {
        const fetchChats = async () => {
            try {
                await Axios.get("http://localhost:4500/readChats").then((res) => {
                    setChats(res.data)
                })
            } catch (err) {
                console.error("Error fetching chats: ", err);
            }
        };
        fetchChats();
    }, []);

    return (
        <div className="chats">
            <Header />
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