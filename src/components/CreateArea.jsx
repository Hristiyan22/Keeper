
import React, {useState} from "react";

function CreateArea(props){

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleTitle(event){
        const newTitle = event.target.value;
        setTitle(newTitle);
    }

    function handleContent(event){
        const newContent = event.target.value;
        setContent(newContent);
    }

    function handleClick(event){
        event.preventDefault();
        const note = {title, content};
        props.onAdd(note);
        setTitle("");
        setContent("");
    }

    return(<div>
        <form onSubmit={handleClick}>
            <input onChange={handleTitle} value={title} name="Title" placeholder="title"/>
            <textarea onChange={handleContent} value={content } name="content" placeholder="Take a note..." rows="3"/>
            <button type="submit">Add</button>
        </form>
    </div>);
}

export default CreateArea;