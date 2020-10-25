import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_ALERT,
  REMOVE_ALERT,
  CONTACT_ERROR,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact,
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
