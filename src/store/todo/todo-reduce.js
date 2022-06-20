import * as types from "./todo-type";

const initialState = [
  { title: "shopping", description: "store shopping", id: "101" },
  { title: "working", description: "work from home", id: "102" },
];

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [...state, action.payload];
    case types.TODO_REMOVE:
      return [...state].filter((x) => x.id !== action.payload);
    case types.TODO_UPDATE:
      return [...state].map((x) => {
        if (x.id === action.payload.id) {
          x.title = action.payload.title;
          x.description = action.payload.description;
        }
        return x;
      });
    default:
      return state;
  }
};

export default reduce;
