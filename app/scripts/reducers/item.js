import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const itemState = {
  items: []
};

export default {
  user: handleActions({
    [ActionTypes.GET_ITEM_LIST]: (state, { payload }) => immutable(state, {
      items: { $set: payload },
    }),
    [ActionTypes.GET_ITEM]: (state, { payload: { id } }) => {
      const item = state.items.find(d => d.id === id);

      return immutable(state, {
        seletecItem: { $set: item },
      });
    },
    [ActionTypes.EDIT_ITEM]: (state) => immutable(state, {
      items: { $set: 'running' },
    }),
  }, itemState),
};
