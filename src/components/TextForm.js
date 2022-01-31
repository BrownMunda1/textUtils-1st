import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        if(text) props.showAlert("Converted to UPPERCASE!","success");
    }

    const handleLowClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        if(text) props.showAlert("Converted to lowercase!","success");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const handleClear=()=>{
        setText("");
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        if(text) props.showAlert("Copied!","success");
    }

    // using useState hook (used to change state)
    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{background: props.mode==='dark'?'#373737':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="9"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick} >Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear} >Clear</button>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008*(text.split(" ").length-1)} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter some text into the textbox above to preview here"}</p>
        </div>
        </>
    )
}
