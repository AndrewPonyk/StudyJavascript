// src/TableComponent.jsx
import {useState} from 'react';

function TableComponent() {
  const [rows, setRows] = useState([]);
  const [showInputs, setShowInputs] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleAddClick = () => {
    setShowInputs(true);
  };

  const handleInput1Change = (e) => setInput1(e.target.value);
  const handleInput2Change = (e) => setInput2(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    if (input1.trim() && input2.trim()) {
      setRows([...rows, { col1: input1, col2: input2 }]);
      setInput1("");
      setInput2("");
      setShowInputs(false);
    }
  }

  return (
    <div>
      <h2>My Dynamic Table</h2>
      {!showInputs && <button onClick={handleAddClick}>Add Row</button>}
      {showInputs && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '1em' }}>
          <input
            type="text"
            placeholder="Column 1"
            value={input1}
            onChange={handleInput1Change}
            required
          />
          <input
            type="text"
            placeholder="Column 2"
            value={input2}
            onChange={handleInput2Change}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
            </tr>
          ))}
          {rows.length === 0 &&
            <tr>
              <td colSpan="2">No rows yet. Click "Add Row" to begin.</td>
            </tr>
          }
        </tbody>
      </table>
      {rows.length < 1 && <h2 style={{color:"red"}}>table is empty</h2>}
    </div>
  );
}

export default TableComponent;