import React, { useState } from "react";
import uuid from "uuid";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  const [values, setValues] = useState({
    items: [
      { id: 1, title: "Title 1" },
      { id: 2, title: "Title 2" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  });

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const clearList = (e) => {};

  const handleDelete = (e) => {};

  const handleEdit = (e) => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-center text-capitalize">Todo input</h3>

          <TodoInput
            item={values.item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={values.editItem}
          />

          <TodoList
            items={values.items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
