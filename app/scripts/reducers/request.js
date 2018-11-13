import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const requestState = {
  requests: [],
};

export default {
  user: handleActions({
    [ActionTypes.GET_REQUEST_LIST]: (state, { payload }) => {
      console.log(payload);
      return immutable(state, {
        requests: { $set: payload },
      })
    },
    [ActionTypes.FILTER_REQUEST]: (state, { payload: { status } }) => {
      const request = state.items.filter(d => d.status === status);
      return immutable(state, {
        requests: { $set: request },
      });
    },
  }, requestState),
};
