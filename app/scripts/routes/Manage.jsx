import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ItemList from 'components/ItemList';
import ViewItem from 'components/ViewItem';
import EditItem from 'components/EditItem';

export default class Manage extends React.PureComponent {

  // const [item, setItem] = useState('user_id');
  handleItemSelected = (item) => {
    console.log("item selected ", item);
    //TODO set item to ViewItem
  };

  render() {
    const item = {
      name: 'user_id',
      description: 'lala',
      type: '234',
      sensitivity: {
        checked: true,
        description: 'This is personal data, and cannot be distributed in raw form'
      },
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
    };

    return (
      <div key="Manage">
        <div className="app__container">
          <div className="app__private__header">
            <h1>Manage Data</h1>
          </div>
          <ItemList handleItemSelecte={this.handleItemSelected} />
          <ViewItem item={item}/>
          <EditItem item={item}/>
        </div>
      </div>
    );
  }
}
