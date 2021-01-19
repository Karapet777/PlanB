export const ACTION_TYPE_CHECK_IN = "ACTION_TYPE_CHECK_IN";
export const ACTION_TYPE_CHECK_OF = "ACTION_TYPE_CHECK_OF";
export const ACTION_TYPE_CHILDREN = "ACTION_TYPE_CHILDREN";
export const ACTION_TYPE_ROOM = "ACTION_TYPE_ROOM";


export const CgangeChackIn = (newChackIn) => {
  return {
    type: ACTION_TYPE_CHECK_IN,
    payload: newChackIn,
  };
};

export const CgangeCheckOf = (newCheckOf) => {
  return {
    type: ACTION_TYPE_CHECK_OF,
    payload: newCheckOf,
  };
};

export const CgangeChildren = (newChildren) => {
    return {
      type: ACTION_TYPE_CHILDREN ,
      payload: newChildren,
    };
  };

export const CgangeRoom= (newRoom) => {
  return {
    type: ACTION_TYPE_ROOM,
    payload: newRoom,
  };
};
