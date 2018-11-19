import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
   'request',
   'manage',
];

export default class Header extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      active: menuItems[0]
    };
    debugger;
  }

  selectMenu(e) {
    this.setState({ active: e.target.innerText.toLowerCase() });
  }

  render() {
    return (
      <header className="app__header">
        <div className="app__container">
          <a className="title">Data Gate</a>
          <div className="app__header__menu">
            <ul className="list-unstyled">
              {menuItems.map(menuItem =>
                  <li key={menuItem}>
                    <Link to={"/"+menuItem}
                      className={this.state.active === menuItem ? 'active' : ''}
                      onClick={this.selectMenu.bind(this)}>
                      <span>{menuItem}</span>
                    </Link>
                  </li>
               )}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
