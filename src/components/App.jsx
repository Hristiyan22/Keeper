import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {

  return (
    <div>
      <Header />
      {notes.map(notes => <Note key={notes.id} title={notes.title} content={notes.content} />)}
      <Footer />
    </div>
  );
}
<<<<<<< HEAD

export default App;
=======
export default App;    
>>>>>>> 528fff8b810077d99e1b5e3f2ace46fd336b9298
