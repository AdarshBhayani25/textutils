import React, { useState } from 'react'


export default function Textform(props) {
    const convertUpcase = () => {
        // const newtext = text.toUpperCase();
        settext(text.toUpperCase());

        var txt = document.getElementById("myid");
        if (!(txt.value === "")) {
            props.showalert(" convert to uppercase successfully", "success");
        }

    }

    const convertLocase = () => {
        // const newtext = text.toUpperCase();
        settext(text.toLowerCase());

        var txt = document.getElementById("myid");
        if (!(txt.value === "")) {
            props.showalert(" convert to lowercase successfully", "success");
        }

    }

    const cleartextfunc = () => {
        var text = document.getElementById("myid");
        settext('');
        setcount(0);
        if (!(text.value === "")) {
            props.showalert(" clear successfully", "success");
        }

    }

    const handleonchange = (event) => {
        settext(event.target.value);
        if (event.target.value === '') {
            setcount(0);
        }
        else {
            const c = text.split(' ').length;
            setcount(c);
        }

    }
    const copytext = () => {
        var text = document.getElementById("myid");
        text.select();
        navigator.clipboard.writeText(text.value);
        if (!(text.value === "")) {
            props.showalert("copied to clipboard", "success");
        }

    }
    const [text, settext] = useState("");
    const [count, setcount] = useState(0);

    return (
        <div className='bg-dark text-white border border-primary my-3 rounded border border-3'>
            <div>
                <h1 className='my-3'>{props.heading}</h1>
                <div classNameName="mb-3">
                    <textarea className="form-control my-3 border border-info " value={text} onChange={handleonchange} id="myid" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-3 border border-white" onClick={convertUpcase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3 border border-white" onClick={convertLocase}>Convert to lowercase</button>
                <button className="btn btn-primary my-3 mx-3 border border-white" onClick={cleartextfunc}>Clear</button>
                <button className="btn btn-primary my-3 mx-3 border border-white" onClick={copytext}>Copy text</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <ul className="list-group list-group-flush border border-info rounded">
                    <li className="list-group-item border border-info">{count} Words</li>
                    <li className="list-group-item border border-info"> {text.length} characters</li>
                    <li className="list-group-item border border-info">it will be take {0.008 * count} Minutes to read</li>
                </ul>
                <h2 className='my-3'>Preview</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}
