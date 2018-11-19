import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes, STATUS } from 'constants/index';

export const itemState = {
  items: [],
  selectedItem: {},
  dataStatus: STATUS.VIEW,
};

export default {
  items: handleActions({
    [ActionTypes.GET_ITEM_LIST]: (state, { payload }) => immutable(state, {
      items: { $set: payload },
      selectedItem: payload.length > 0 ? { $set: payload[0] } : {},
    }),
    [ActionTypes.GET_ITEM]: (state, { payload: { id } }) => {
      const item = state.items.find(d => d.id === id);
      return immutable(state, {
        selectedItem: { $set: item },
      });
    },
    [ActionTypes.EDIT_ITEM]: (state, { payload }) => {
      return immutable(state, {
        items: { $set: state.items.map((e) => {
          if (e.id === payload.id) {
            return { ...payload }
          }
          else {
            return e;
          }
        }) },
        selectedItem: { $set: payload },
      });

    },
  }, itemState),
};
