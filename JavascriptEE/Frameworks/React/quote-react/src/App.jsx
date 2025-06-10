import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [quotes, setQuotes] = useState([]);

async function retrieveNextQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return `"${data.content}" - ${data.author}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return "The only way to do great work is to love what you do. - Steve Jobs";
  }
}

  return (
    <>
      <h2>Quotes app react</h2>
      <div className="card">
        <button onClick={async () => {
          setCount((count) => count + 1); 
          const newQuote = await retrieveNextQuote();
          setQuotes([...quotes, newQuote]);
          }
        }>
          Add quote {count}
        </button>

       <ul>
        {
          quotes.map((item, index)=> {
            return <li key={index}>{item}</li>}
          )
         
        }
       </ul>
      </div>
    </>
  )
}

export default App
