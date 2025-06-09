import {useState} from 'react'
import './App.css'
import TableComponent from "./TableComponent.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])


    return (
        <>
            <TableComponent/>
            <div className="card">
                <button onClick={() => {
                    setCount(count + 1)
                    setItems([...items, `Item ${count + 1}`])
                }}>
                    count is {count}
                </button>
                <ul id="list-all-items">
                    {items.map((item, indxex) =>
                        <li key={indxex}>{item}</li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default App
