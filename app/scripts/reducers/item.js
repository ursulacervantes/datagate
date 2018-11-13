import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes, STATUS } from 'constants/index';

export const itemState = {
  items: [],
  seletectedItem: {},
  dataStatus: STATUS.VIEW,
};

export default {
  user: handleActions({
    [ActionTypes.GET_ITEM_LIST]: (state, { payload }) => immutable(state, {
      items: { $set: payload },
      seletectedItem: payload.length > 0 ? { $set: payload[0] } : {},
    }),
    [ActionTypes.GET_ITEM]: (state, { payload: { id } }) => {
      const item = state.items.find(d => d.id === id);
      return immutable(state, {
        seletectedItem: { $set: item },
      });
    },
    [ActionTypes.EDIT_ITEM]: (state, { payload }) => {
      state.items.forEach((e) => {
      	if(e.id === payload.id) {
          e = payload;
          return false;
        }

      });
      return immutable(state, {
        seletectedItem: { $set: payload },
      });

    },
  }, itemState),
};
