import React from 'react';
import classnames from 'classnames';

import { Button } from './../../index';

class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpened: false
    }
  }

  onMouseEnter = () => this.setState(() => ({
    menuOpened: true
  }));

  onMouseLeave = () => this.setState(() => ({
    menuOpened: false
  }));

  render() {
    const { className, items } = this.props;
    const { menuOpened } = this.state;

    return (
      <div className={classnames('drop-down', className, { 'opened': menuOpened })} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <Button className='drop-down-toggler' blue={true}>
          {this.props.children}
        </Button>
        <div className={classnames('drop-down-menu', { 'visible': this.state.menuOpened })}>
          {items.map((item, index ) => (
            <a className='drop-down-link' key={index} href={item.link} target='_blank'>
              { item.title }
            </a>
          ))}
        </div>
        {/*{menuOpened && items.length && this.renderMenu(items)}*/}
      </div>
    );
  }
}

export default DropDown;
