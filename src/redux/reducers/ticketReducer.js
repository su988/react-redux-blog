import { ADD_TICKET } from '../constants/ActionTypes';

const initialState = {
  tickets: [],
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, { ...action.payload }],
      };
    default:
      return state;
  }
};
