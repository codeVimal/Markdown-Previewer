import React, { useState } from "react";
import {marked} from "marked";
import Style from './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";


function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState("‎ ");

  const handleDownload = () => {
    const html = marked(markdown);
    const element = document.createElement("a");
    const file = new Blob([html], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "preview.html";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div >
           
        <div style={{ display: "flex" }}>
      <div  style={{ flex: 1 }}  id="editdiv">
      <h2  id="editorheading"> <FontAwesomeIcon id="image" icon={faPen} style={{color: "#08a8e8",}} /> EDITOR </h2> 
    
      <Editor onChange={(event) => setMarkdown(event.target.value)} value={markdown} />
      </div>
      <div  style={{ flex: 1 }}  id="prevdiv">
      <h2 id="prevheading">  <FontAwesomeIcon id="image2" icon={faEye} style={{color: "#08a8e8",}} /> PREVIEW</h2>
      <Preview markdown={markdown} />
      </div>
        </div>
      <button id="buttons" onClick={handleDownload}>Download Preview</button>
    </div>
  );
}

function Editor({ onChange, value }) {
  return <textarea rows={6} onChange={onChange} value={value} />;
}

function Preview({ markdown }) {
  const parsedMarkdown = marked(markdown);
  return <center><div id="preview" dangerouslySetInnerHTML={{ __html: parsedMarkdown }} /></center>;
}

export default MarkdownPreviewer;
