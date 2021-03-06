// @flow
/**
 * @module Actions/Item
 * @desc Item Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

const items = [
  { id: '1',
    name: 'user_id',
    description: 'lala',
    type: 'integer',
    sensitivity: true,
    values: [
      {
        key: 'value1',
        value: 'sadf',
        description: 'dsfasdf'
      },
      {
        key: 'value2',
        value: 'ger',
        description: 'hethg'
      }
    ]
  },
  { id: '2',
    name: 'item_id',
    description: 'lala',
    type: 'integer',
    sensitivity: false,
    values: [
      {
        key: 'value1',
        value: 'sadf',
        description: 'dsfasdf'
      }
    ]
  },
  { id: '3',
    name: 'user_email',
    description: 'lala',
    type: 'string',
    sensitivity: true,
    values: [
      {
        key: 'value1',
        value: 'sadf',
        description: 'dsfasdf'
      },
      {
        key: 'value2',
        value: 'ger',
        description: 'hethg'
      },
      {
        key: 'value3',
        value: 'ewr23q',
        description: 'dgrsty34'
      }
    ]
  },
  { id: '4',
    name: 'items_view',
    description: 'lala',
    type: 'string',
    sensitivity: true,
    values: [
      {
        key: 'value1',
        value: 'sadf',
        description: 'dsfasdf'
      },
      {
        key: 'value2',
        value: 'ger',
        description: 'hethg'
      },
      {
        key: 'value3',
        value: 'ewr23q',
        description: 'dgrsty34'
      }
    ]
  },
  { id: '5',
    name: 'items_favorites',
    description: 'lala',
    type: 'string',
    sensitivity: true,
    values: [
      {
        key: 'value1',
        value: 'sadf',
        description: 'dsfasdf'
      },
      {
        key: 'value2',
        value: 'ger',
        description: 'hethg'
      },
      {
        key: 'value3',
        value: 'ewr23q',
        description: 'dgrsty34'
      }
    ]
  }
];

export const {
  getItemList,
  getItem,
  editItem,
} = createActions({
  [ActionTypes.GET_ITEM_LIST]: () => (items),
  [ActionTypes.GET_ITEM]: (id: string) => ({ id }),
  [ActionTypes.EDIT_ITEM]: (item: any) => (item),
});
