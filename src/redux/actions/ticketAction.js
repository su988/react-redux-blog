import { ADD_TICKET } from '../constants/ActionTypes';

export const addTicket = (ticket) => {
  return {
    type: ADD_TICKET,
    payload: ticket,
  };
};
