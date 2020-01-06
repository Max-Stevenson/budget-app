export default (state = {}, action) => {
  switch (action) {
    case 'LOGIN':
      return {
        uid: action.uid
      };

    case 'LOGOUT':
      return {};

    default:
      return state;
  };
};