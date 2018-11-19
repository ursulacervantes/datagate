import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const requestState = {
  requests: [],
  filterValue: 'ALL',
};

export default {
  requests: handleActions({
    [ActionTypes.GET_REQUEST_LIST]: (state, { payload }) => immutable(state, {
      requests: { $set: payload },
    }),
    [ActionTypes.FILTER_REQUEST_LIST]: (state, { payload: { status } }) => immutable(state, {
      filterValue: { $set: status },
    }),
  }, requestState),
};
