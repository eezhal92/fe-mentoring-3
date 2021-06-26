const initialState = {
  id: 1,
  name: 'Logged User',
  email: 'john@gmail.com',
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.newName };
    default:
      return state;
  }
}

