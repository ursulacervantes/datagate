// @flow
/**
 * @module Actions/Request
 * @desc Requests Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

const requests = [
  {
    id: 'r1',
    date: '2017/09/21',
    reason: 'Data science algorithms',
    status: 'Pending',
  },
  {
    id: 'r2',
    date: '2017/09/21',
    reason: 'Email blast',
    status: 'Approved',
  },
  {
    id: 'r3',
    date: '2017/09/21',
    reason: 'Investigation',
    status: 'Denied',
  }
];

export const {
  getRequestList,
  filterRequestList,
} = createActions({
  [ActionTypes.GET_REQUEST_LIST]: () => (requests),
  [ActionTypes.FILTER_REQUEST]: (status: string) => ({ status }),
});
