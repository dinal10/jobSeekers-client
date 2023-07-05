import { login } from "../fetching/auth";
import { useEffect } from "react";
export default function Login() {
    async function handleLogin() {
        const payload = {
            email: "user@mail.com",
            password: "user"
        }
        await login(payload)
    }

    useEffect(() => {
     handleLogin();
    }, [])

    return <div>Login Page</div>;
}