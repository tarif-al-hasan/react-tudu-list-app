import React from "react";
import { useState } from "react";
const Todo = () => {
  const [todoData, setTodoData] = useState("");
  const [Item, setItem] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [iseditItem, setIsEditItem] = useState(null);
  // add item value
  let addItem = () => {
    if (!todoData) {
      alert("Empty !! please take a name");
    } else if (todoData && !toggleBtn) {
      setItem(
        Item.map((element) => {
          if (element.id === iseditItem) {
            return { ...element, names: todoData };
          }
          return element;
        })
      );

      setToggleBtn(true);
      setTodoData("");
      setIsEditItem(null);
    } else {
      const allTodoData = {
        id: Date.now(),
        names: todoData,
      };

      setItem([...Item, allTodoData]);
      setTodoData("");
    }
  };
  // delete item
  const deleteItem = (index) => {
    const deleteItems = Item.filter((element) => {
      return index !== element.id;
    });
    setItem(deleteItems);
  };
  // delete all
  const deleteAll = () => {
    setItem([]);
  };

  // edit todo title
  const editItem = (id) => {
    let newEditItem = Item.find((ele) => {
      return ele.id === id;
    });
    setToggleBtn(false);
    setTodoData(newEditItem.names);
    setIsEditItem(id);
    console.log(newEditItem);
  };
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-6">
            <h1 className="text-center text-info">Tarif Tudu List</h1>
            <div className="card">
              <div className="card-body d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name : "
                  value={todoData}
                  onChange={(e) => setTodoData(e.target.value)}
                />
                {toggleBtn ? (
                  <button className="btn btn-primary ml-2" onClick={addItem}>
                    {" "}
                    Add
                  </button>
                ) : (
                  <button className="btn-info" onClick={addItem}>
                    edit{" "}
                  </button>
                )}

                <button
                  className="btn btn-danger ml-2 removeAllBtn"
                  onClick={deleteAll}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-6">
            <div className="card">
              <h1 className="text-center text-info">List Item</h1>
              <div className="card-body">
                <ul className="list-group">
                  {Item.map((element) => {
                    return (
                      <li
                        className="list-group-item d-flex justify-content-between"
                        key={element.id}
                      >
                        <span className="fs-2 px-2">{element.names}</span>{" "}
                        <div>
                          {/* Edit titile */}
                          <button
                            className="btn-info"
                            onClick={() => editItem(element.id)}
                          >
                            edit
                          </button>{" "}
                          {""}
                          <button
                            className="btn-danger"
                            onClick={() => deleteItem(element.id)}
                          >
                            delete
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
