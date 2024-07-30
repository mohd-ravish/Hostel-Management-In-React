import Axios from "axios";
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

// Function to submit chat
export const handleChatSubmit = async (e, chats, setChats) => {
    e.preventDefault();
    if (Object.values(chats).every(value => value.length > 0)) {
        await Axios.post(`${API_URL}/chats/submitchat`, chats)
            .then(response => {
                if (response.data.status === "success") {
                    toast.success(response.data.data, {
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

// Function to fetch chats
export const fetchChats = async (setChats) => {
    try {
        const response = await Axios.get(`${API_URL}/chats/readChats`);
        if (response.data.status === "success") {
            setChats(response.data.data);
        } else {
            console.log("Failed to fetch chats");
            toast.error("Error!", {
                position: "top-center"
            })
        }
    } catch (error) {
        console.log(error);
    }
};