import instance from "../lib/axios.jsx";

export async function login (params) {
    try {
        const {email,password} = params;
        const response = await instance({
            url: "/auth/login", 
            method: "POST",
            data:{email,password}
        })
        const data = response.data
        localStorage.setItem("token", data.access_token)
        return data
    } catch (err) {
        console.log(err);
    }
    
}