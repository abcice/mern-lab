import { useState } from "react";

export default function NewHootForm({ handleHoot }) {
  const [text, setText] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault(); 
    if (!text.trim()) return; 
    handleHoot(text); 
    setText(""); 
  }

  return (
    <form onSubmit={handleSubmit} className="NewHootForm">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        required
      />
      <button type="submit">Hoot</button>
    </form>
  );
}
