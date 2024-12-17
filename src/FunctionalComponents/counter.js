import React, { useState, useContext } from "react";
import ModalComponent from "./ModalComponent";
import { AppDataContext } from "./AppData";


const Counter = () => {
    const AppDataContext1 = useContext(AppDataContext)
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(true);

    const increment = () => {

        setCount((count) => { return count + 1 })
    }
    const decrement = () => {
        setCount((count) => { return count - 1 })
    }

    const changeStatus = () => {
        setStatus((status) => { return !status })
    }

    return (
        <>
            <h1>Welcome to Functional Component</h1>
            <button onClick={AppDataContext1.login}>{AppDataContext1.loginStatus ? "Logout" : "login"}</button>
            <p style={{ fontSize: "3rem" }}>{count}</p>
            <button style={{ padding: "20px", backgroundColor: "white", borderRadius: "5px", marginLeft: "10px" }} onClick={increment}>Increment</button>
            <button style={{ padding: "20px", backgroundColor: "white", borderRadius: "5px", marginLeft: "10px" }} onClick={decrement}>Decrement</button>
            <div style={{ marginTop: "40px" }}>
                {status && <h1>Welcome to the functional component</h1>}

                {status && <button style={{ padding: "20px", backgroundColor: "white", borderRadius: "5px", marginLeft: "10px" }} onClick={changeStatus}>Hide Content</button>}
                {!status && <button style={{ padding: "20px", backgroundColor: "white", borderRadius: "5px", marginLeft: "10px" }} onClick={changeStatus}>Show Content</button>}
            </div>
            <ModalComponent />
        </>
    )
}

export default Counter;