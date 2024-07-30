import Axios from "axios";
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

export const handleRegistration = async (e, studentDetails) => {
    e.preventDefault();
    if (Object.values(studentDetails).every(value => value.length > 0)) {
        await Axios.post(`${API_URL}/register/register`, studentDetails)
            .then(response => {
                if (response.data.status === "success") {
                    window.location.reload(false);
                    toast.success(response.data.message, {
                        position: "top-center"
                    })
                } else {
                    toast.error(response.data.message, {
                        position: "top-center"
                    })
                }
            })
    }
}