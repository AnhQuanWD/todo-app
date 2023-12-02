import "./App.css";
import { useState } from "react";

function App() {
  const [work, setWork] = useState("");
  const [works, setWorks] = useState([]);

  console.log(works);

  const handleAdd = (e) => {
    e.preventDefault();
    setWorks((pre) => [...pre, work]);
    setWork("");
  };

  return (
    <div className="App">
      <div className="App_container__ZdBeZ">
        <p className="App_counter__VFxAr">All todos: {works.length}</p>
        <p className="App_counter__VFxAr">Сompleted todos: 0</p>
      </div>
      <form className="TodoEditor_editor__rUZob">
        <input
          value={work}
          onChange={(e) => setWork(e.target.value)}
          className="TodoEditor_textarea__xteDv"
        />
        <button onClick={handleAdd} className="TodoEditor_buttonEditor__hvBlz">
          Add
        </button>
      </form>
      <div className="Filter_filter__vxThR">
        <label>
          Filter
          <input type="text" className="Filter_filterInput__1Cysk" value="" />
        </label>
      </div>
      <ul className="TodoList_list__dqQoz">
        {works.map((item, index) => (
          <li key={index} className="TodoList_item__aXWmc">
            <input type="checkbox" className="checkbox" />
            <p className="TodoList_text__7CVXe">{item}</p>
            <button type="button" className="TodoList_buttonDelete__ih045">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
