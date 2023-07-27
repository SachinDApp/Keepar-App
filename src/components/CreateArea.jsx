import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [toggle, setToggle]= useState(true);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleClick(){
     setToggle(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;
     
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setToggle(true);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          type={toggle ? "hidden": "text"}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea rows={toggle ? "1":"3"} cols="40"  style={{resize: null}} 
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
          placeholder="Take a note..."
          
        />

        <button onClick={submitNote}>< AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
