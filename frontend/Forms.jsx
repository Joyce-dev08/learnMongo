//simple form example 1

// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");
//   const [result, setResult] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setResult(text);
//   };

//   return (
//     <div>
//       <h2>Simple Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Type here..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <p>{result}</p>
//     </div>
//   );
// }

// export default App;


//simple form example 2

//  import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <h2>Display Form</h2>

//       <input
//         type="text"
//         placeholder="Type here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <p>{text}</p>
//     </div>
//   );
// }

// export default App;

 //const [show, setShow] = useState(false);


//   return (
//     <>
//     {/* <button onClick={()=>setShow(!show)}>switch</button>
//       <h1>{show ? "Hello" : "Bye bye world"}</h1> */}

