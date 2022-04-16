import React from "react";
import {useNavigate} from "react-router-dom";

export const AboutPages: React.FC = () => {
    const history = useNavigate()
    return (
        <>
            <h1>Page Info</h1>
            <p>Text</p>
            <button className="btn" onClick={() => history('/')}>Back </button>
        </>
    )
}