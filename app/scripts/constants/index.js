import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  SWITCH_MENU: undefined,
  EXCEPTION: undefined,
  USER_LOGIN: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined,
  GET_ITEM_LIST: undefined,
  GET_ITEM: undefined,
  EDIT_ITEM: undefined,
  GET_REQUEST_LIST: undefined,
  FILTER_REQUEST_LIST: undefined,
});

/**
 * @constant {Object} STATUS
 * @memberof Constants
 */
export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
  VIEW: 'view',
  EDIT: 'edit',
  APPROVED: 'approved',
  DENIED: 'denied',
  PENDING: 'pending',
  ALL: 'all',
};
