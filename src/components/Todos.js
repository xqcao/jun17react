import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/todo/todo-action";
import { v4 as uuidv4 } from "uuid";

const Todos = (props) => {
  const { todoList, addOne, removeOne, updateOne } = props;
  const defaultOne = { title: "", description: "", id: "001" };
  const [onetodo, setOnetodo] = useState(defaultOne);
  const addOneTodo = () => {
    // console.log(onetodo);
    const id = uuidv4();
    addOne(onetodo, id);
    setOnetodo({ title: "", description: "" });
  };
  const [flag, setFlag] = useState(false);
  const onClickUpdate = (x) => {
    setFlag(true);
    setOnetodo({ ...x });
  };
  return (
    <div>
      <h2>TODOS List</h2>
      <div>
        <div>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={onetodo.title}
            onChange={(e) => setOnetodo({ ...onetodo, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="title">description:</label>
          <br />
          <input
            type="text"
            name="description"
            value={onetodo.description}
            onChange={(e) =>
              setOnetodo({ ...onetodo, description: e.target.value })
            }
          />
        </div>
        {flag ? (
          <button
            onClick={() => {
              setFlag(false);
              updateOne(onetodo);
              setOnetodo(defaultOne);
            }}
          >
            update
          </button>
        ) : (
          <button onClick={addOneTodo}>Submit</button>
        )}

        <hr />
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>title</th>
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((el, idx) => (
              <tr key={el.id + "-" + idx}>
                <td>{idx + 1}</td>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>
                  <button onClick={() => onClickUpdate(el)}>Update</button>
                  <button onClick={() => removeOne(el.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoReduceState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addOne: (x, i) => {
      x.id = i;
      dispatch(actions.todo_add(x));
    },
    removeOne: (x) => dispatch(actions.todo_remove(x)),
    updateOne: (x) => dispatch(actions.todo_update(x)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
