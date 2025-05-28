import { useState } from "react";

export const useLoginModel = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // You can later replace this with your MVVM ViewModel logic
        console.log("Logging in with:", { username, password });
    };

    return {
        handleUsernameChange,
        handlePasswordChange,
        username,
        password,
        handleSubmit
    }
}