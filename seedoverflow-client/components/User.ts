import { API_URL } from "../pages/_app";
import { User } from "./Auth";

export const updateUser = async (userDetails: User, authToken: string) => {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(userDetails)
    }
    const url = `${API_URL}/user`
    return fetch(url, requestOptions)
}