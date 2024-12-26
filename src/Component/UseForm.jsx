import React, { useState } from 'react'

function UseForm() {
    const [title,setTitle] = useState('')
    const [stage,setStage] = useState('')
    const [completed,setCompleted] = useState('')

    const Formtitle = (e)=>{
        setTitle(e.target.value);
    }
    const Formstage = (e)=>{
        setStage(e.target.value);
    }
     const Formcomplete = (e)=>{
        setCompleted(e.target.value);
    }
    const submit = () =>{
        if(!title||!stage||!completed){
            alert('All fields are Reqiured');
            return;}
        alert('Form submited Successfully')
    }
    const handleReset = () => {
        setTitle(''); 
        setStage(''); 
        setCompleted(''); 
      };
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Form data:",{title,stage,completed});
        handleReset();


    }

  return (
   
    <form className='useform ' onSubmit={handleSubmit}>
        <h1 className='heading'>Form</h1>
        <div className='form'>
        <label For="Title">Title  </label>
        <select className='box' id="title" value={title} onChange={Formtitle} Reqiured>
          <option value="" selected disabled>Select a Title</option>
          <option value="HTML5">HTML5</option>
          <option value="CSS">CSS</option>
          <option value="BootStrap">BootStrap</option>
          <option value="Javascript">Javascript</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>
      </div>

      <div className='form'>
        <label For="Stage">Stage </label>
        <select className='box' id="stage" value={stage} onChange={Formstage} Reqiured>
          <option value="" selected disabled>Select a Stage</option>
          <option value="Learning">Learning</option>
          <option value="Task">Task</option>
        </select>
      </div>
      <div className='form'>
        <label For="Completed">Completed</label>
        <select className='box' id="completed" value={completed} onChange={Formcomplete}  Reqiured>
          <option value="" selected disabled>Completed</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
     <div className='submit'>
      <button className='button1' type="submit" onClick={submit}>Submit</button>
      </div>
    </form>
  )
}

export default UseForm

