"use client"
import { useState } from "react"
import Login from "./login/page"
import Signup from "./signup/page"
import CommonButton from './commonbutton/page'

export default function Homepage() {
    const [isLoginView, setIsLoginview] = useState(false)
    return (
        <>
            <div className="homepage-container">
                <div className="homepage-section">
                    <div className="homepage-panel">
                        <header>
                            Welcome
                        </header>
                    </div>
                </div>
                <div className="homepage-content">
                    {isLoginView ? <Signup /> : <Login />}
                    {/* <button onClick={()=>  setIsLoginview(!isLoginView)}>{isLoginView ? "Switch to login " : "Switch to signup"}</button> */}
                  <CommonButton onClick={()=>  setIsLoginview(!isLoginView)} buttonText={isLoginView ? "Switch to login " : "Switch to signup"} />
                </div>
            </div>
        </>
    )
}
