import LoginView from "./LoginView";
import { useLoginModel } from "./useLoginModel";

export default function Login() {
    const loginModel = useLoginModel();
    return (
        <LoginView {...loginModel} />
    )
}