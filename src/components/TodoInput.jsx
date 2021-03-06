import React from "react";

function TodoInput({ item, handleChange, handleSubmit, editItem }) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" aria-hidden="true"></i>
            </div>
          </div>

          <input
            type="text"
            onChange={handleChange}
            value={item}
            className="form-control text-capitalize"
            placeholder="Add todo item"
          />
        </div>

        <button
          type="submit"
          className={
            editItem
              ? "btn btn-block btn-success mt-3 text-uppercase"
              : "btn btn-block btn-primary mt-3 text-uppercase"
          }
          disabled={item ? false : true}
        >
          {editItem ? "edit item" : "add item"}
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
