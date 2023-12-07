
import './App.css';
import Dialog from './Component/Dialog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionBox from './Component/QuestionBox';
import Navbar from './Component/Navbar';
import { useState } from 'react';
import Admin from './Component/Admin';
function App() {
  const [name,setName]=useState('')
  const [score,setScore]=useState(0)
  const [userId,setUserId]=useState('')
  const [question,setQuestion]=useState('')
  return (
    <Router>
      <Navbar score={score}/>
      <Routes>
        <Route exact path='/' element={<Dialog setName={setName} setUserId={setUserId } setScore={setScore} setQuestion={setQuestion}/>}></Route>
        <Route exact path='/quiz' element={<QuestionBox name={name} setScore={setScore}  setUserId={setUserId } setQuestion={setQuestion} question={question}  userId={userId} score={score}/>}></Route>
        <Route exact path='/admin' element={<Admin/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
