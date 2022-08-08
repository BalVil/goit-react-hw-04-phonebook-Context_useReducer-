import { useReducer, useCallback } from 'react';
import { useLocalStorage } from 'react-use';
import { contactsReducer } from 'components/App/App';

const LS_KEY = 'contacts';
const INITIAL_STATE = {
  items: [{ id: 'id-1', name: 'user', number: '000-00-00' }],
  filter: '',
};

export const usePersistReducer = () => {
  const [savedState, saveState] = useLocalStorage(LS_KEY, INITIAL_STATE);

  const reducerLocalStorage = useCallback(
    (state, action) => {
      const newState = contactsReducer(state, action);

      saveState(newState);

      return newState;
    },
    [saveState]
  );

  return useReducer(reducerLocalStorage, savedState);
};
