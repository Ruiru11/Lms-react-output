import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from "semantic-ui-react";

class Navbar extends React.Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state;
      return (
        <Menu style={{backgroundColor:"black"}}>
          <Menu.Item position='right' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Link to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='flags' active={activeItem === 'flags'} onClick={this.handleItemClick}>
              <Link to="/flags">
                Flags of the world
              </Link>
            </Menu.Item>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
              <Link to="/about">
                About
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      );
    }
  };
  
  export default Navbar;