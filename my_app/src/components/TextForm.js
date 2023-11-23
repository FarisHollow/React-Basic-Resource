import React , {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleClick = () => {

    let cap = text.toUpperCase();

    setText(cap);
  }
  const handleLowClick = () => {

    let low = text.toLowerCase();

    setText(low);
  }

  const handleOnChange = (event) => {

    setText(event.target.value);
  }



  
  return (
    <>
    <div className='container'>

      <h1>{props.place} </h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Write something  </label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button className='btn btn-primary mx-3' onClick={handleClick}>Click to capitalize</button>
<button className='btn btn-primary' onClick={handleLowClick}>Convert to lowercase </button>

</div>
<div className='container my-3'>

  <h3>Text Summery</h3>

  <p>{text.split(" ").length} words and {text.length} characters.</p>
  <div className='my-9'>

    <h2>Preview</h2>
    <p>{text}</p>
  </div>
</div>



</>

  )
}
