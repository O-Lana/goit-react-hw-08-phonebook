import { Link } from "react-router-dom";

export const HomeView = () => {
    return (
        <>
            <h1>Welcome to Phonebook app</h1>
            <p>Please 
                <span>
                    <Link to="/register">Register</Link>
                </span> 
                or 
                <span>
                    <Link to="/login">Login</Link>
                </span>
                as a user
            </p>
        </>
    )
}