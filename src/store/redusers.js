import {
  ACTION_TYPE_CHECK_IN,
  ACTION_TYPE_CHECK_OF,
  ACTION_TYPE_CHILDREN,
  ACTION_TYPE_ROOM,
} from "./actions";

const initialState = {
  chackIn: "",
  checkOf: "",
  children: "",
  room: "",
};

export const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_CHECK_IN:
      return { ...state, chackIn: action.payload };
    case ACTION_TYPE_CHECK_OF:
      return { ...state, checkOf: action.payload };
    case ACTION_TYPE_CHILDREN:
      return { ...state, children: action.payload };
    case ACTION_TYPE_ROOM:
      return { ...state, room: action.payload };
  }
  return state;
};
