import { FETCH_MESSAGES } from '../src/actions';

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
};

export default messagesReducer;
