import React, { useState } from 'react'

export default function Textform(props) {
    const convertUpcase = () => {
        // const newtext = text.toUpperCase();
        settext(text.toUpperCase());
    }

    const convertLocase = () => {
        // const newtext = text.toUpperCase();
        settext(text.toLowerCase());
    }

    const handleonchange = (event) => {
        settext(event.target.value);
    }
    const [text, settext] = useState("Enter text here");

    return (
        <div className='bg-dark text-white border border-primary my-3 rounded '>
            <div>
                <h1 className='my-3'>{props.heading}</h1>
                <div classNameName="mb-3">
                    <textarea className="form-control my-3 border border-info " value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-3 border border-white" onClick={convertUpcase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3 border border-white" onClick={convertLocase}>Convert to lowercase</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <ul className="list-group list-group-flush border border-info rounded">
                    <li className="list-group-item border border-info">{text.split(" ").length} Words</li>
                    <li className="list-group-item border border-info"> {text.length} characters</li>
                    <li className="list-group-item border border-info">it will be take {0.008 * text.split(" ").length} Minutes</li>
                </ul>
                <h2 className='my-3'>Preview</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}