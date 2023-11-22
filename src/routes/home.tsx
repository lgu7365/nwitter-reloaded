import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { auth } from "../firebase"

export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
      return () => {
        console.log(auth.currentUser);
      };
    }, [auth.currentUser]);

    const logOut = () => {
        auth.signOut();
        navigate("/login");
    }
    return (
        <>
            <button onClick={logOut}>Log Out</button>
        </>
    )
}