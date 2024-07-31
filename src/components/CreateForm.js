import React, { useRef, useState } from 'react';
import './CreateForm.scss';

function CreateForm() {
  const [qn, setQn] = useState('');
  const [opt, setOpt] = useState([]);
  const [msg, setMsg] = useState('');
  const optionRef = useRef();

  const AddOptions = () => {
    if (optionRef.current.value) {
      setOpt([...opt, optionRef.current.value]);
      console.log([...opt, optionRef.current.value]);
      setMsg('');
      optionRef.current.value = '';  // Clear the input field after adding an option
    }
  };

  return (
    <div>
      <section className='head'>
        <input type='text' placeholder='Place your quiz title here' /><br />
        <textarea rows="3" placeholder='Area to fill extra details about the quiz'></textarea>
      </section>
      <section className='mcq'>
        <div>
          <input
            className='qn'
            type='text'
            placeholder='Question'
            value={qn}
            onChange={(e) => setQn(e.target.value)}
          />
          <br />
            {opt && <div className='left'>
              {opt.map(e=>{
                return (
                <li>{e}</li>)
              } 
                )}
              <br />
              </div>}
          <div className='options'>
            <input
              type='text'
              ref={optionRef}
              placeholder='options'
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button onClick={AddOptions}>add option</button>
          </div>
          <br />
          <label>
            Time(in seconds) <input type='number' placeholder='time in seconds' />
          </label>
          <label>
            Marks <input type='number' placeholder='enter marks' />
          </label>
          <br />
          <button>Add Question</button>
        </div>
      </section>
      <section className='newqn'>
        <button>Add new mcq</button>
        <button>Add new Multiple choice</button>
      </section>
    </div>
  );
}

export default CreateForm;
