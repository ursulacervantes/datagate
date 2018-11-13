// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

const items = [
  { id: '1',
    keyName: 'user_id',
  },
  { id: '2',
    keyName: 'item_id'
  },
  { id: '3',
    keyName: 'user_email'
  },
  { id: '4',
    keyName: 'items_view'
  },
  { id: '5',
    keyName: 'items_favorites'
  }
];

export const {
  getItemList,
  getItem,
  editItem,
} = createActions({
  [ActionTypes.GET_ITEM_LIST]: () => (items),
  [ActionTypes.GET_ITEM]: (id: string) => ({ id }),
  [ActionTypes.EDIT_ITEM]: () => ({}),
});
