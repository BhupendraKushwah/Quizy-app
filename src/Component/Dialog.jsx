import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dialog = ({setName,setUserId,setQuestion,setScore}) => {


  const [user, setUser] = useState("");
  const navigate=useNavigate()

  const handleInputChange = (e) => {
    setUser(e.target.value)
  };
  const handleSubmit = async() => {
    if(user !==""){
      const url='http://localhost:5000/quiz/start-quiz'
        const response=await fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name:user})
            
        })
        
        const data= await response.json()
        setQuestion(data.question)
        setUserId(data.user._id)
        setScore(0)
        setName(user)
        console.log(data.user)
        navigate('/quiz')
  
    }
    else{
        alert("Please enter your Name")
    }
  };
  return (
    <div className="container">
      <dialog open={true} contentLabel="Name Modal" className="Name-Modal">
        <h2>What's your name?</h2>
        <input
          type="text"
          id="Name"
          name="Name"
          value={user}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Done</button>
      </dialog>
    </div>
  );
};

export default Dialog;
