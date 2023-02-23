import React, { useState } from 'react'


export default function TextForm(props) {

  const [Text, setText] = useState('');

  const upperCaseClick = () => {
    // console.log("You have clicked handleupclick function"+ Text);
    // setText("You have clicked Upper case button")

    let newText = Text.toUpperCase();
    setText(newText);

  }
  const lowerCaseClick = () => {

    let newText = Text.toLowerCase();
    setText(newText);
  }

  const clearClick = () => {
    let newText = "";

    setText(newText);
  }

  const copyClick = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const removeExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(""))

  }

  const onchange = (event) => {
    // console.log("You have clicked onchange function");
    setText(event.target.value);
  }

  return (
    <>

      <div className="container my-2">
        <h3 className="text-center" >Enter the text to analyse below</h3>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={onchange} rows="6"></textarea>
        </div>



        <button className="btn btn-success " onClick={upperCaseClick}>Convert to upperCase</button>


        <button className="btn btn-secondary mx-2" onClick={lowerCaseClick}>Convert to Lower Case  </button>

        <button className="btn btn-light mx-2" onClick={clearClick}>Clear the text</button>
        <button className="btn btn-dark mx-2" onClick={copyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

      </div>




      <div className="container ">

        <h3 style={{ color: 'white' }}>Your text summary</h3>
        <p style={{ color: 'white' }}>{Text.split(" ").length} words and {Text.length} characters</p>
        <p style={{ color: 'white' }}>An average reader can read on word in {0.008 * Text.split(" ").length} Minutes</p>
        <h2 style={{ color: 'white' }}>Preview :</h2>
        <p className='preview' style={{ color: 'white' }}>{Text}</p>
      </div>


    </>
  )
}
