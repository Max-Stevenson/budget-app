const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((element) => {
        element.id != action.id
      });
    case 'EDIT_EXPENSE':
      return state.map((element) => {
        if (element.id === action.id) {
          return {
            ...element,
            ...action.updates
          }
        };
      });
    default:
      return state;
  };
};