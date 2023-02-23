import React,{useState} from 'react'

export default function About() {
    
const [style,setStyle]=useState(
    {color:'white',
backgroundColor:'black'
});

 const [button,setButton]=useState('Enable Light Mode');



const onClickEnableDark= () => {
  if (style.color === 'white') {
    setStyle({
        color:'black',
        backgroundColor:'white'
    })
    setButton("Enable Dark mode")
}else{
    setStyle({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
    })
    
    setButton("Enable Light Mode")
}
}


  return (
<>
    <div className='container' >

    <h3>About Us</h3>
      
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
        Accordion Item 1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong >This is an Practice Session. </strong> <br></br>
        A small project with React js 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
        Accordion Item 2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={style}>
        Accordion Item 3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
       
      </div>
    </div>
  </div>
</div>


    </div>

    <div className="container my-3">
   <button className="btn btn-primary" onClick={onClickEnableDark}>{button}</button>
   

    </div>


    </>
  )
}
