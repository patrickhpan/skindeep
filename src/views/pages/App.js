import React, {PropTypes} from 'react'

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl'

import { Link } from 'react-router';

import TabLink from '../components/TabLink.js';
import DrawerLink, { hideDrawer } from '../components/DrawerLink.js';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {
    render() {
      return (
        <Layout fixedHeader>
          <Header scroll title={<Link className="NoDecorate InheritColor" to={`/`}>Title</Link>} className="DesktopNav MobileDrawer">
            <Navigation>
              <TabLink _isIndex to={`/`}>Home</TabLink>
              <TabLink to={`/a`}>Link</TabLink>
              <TabLink to={`/b`}>Link</TabLink>
              <TabLink to={`/c`}>Link</TabLink>
            </Navigation>
          </Header>
          <Drawer title={<Link className="NoDecorate InheritColor" to={`/`} onClick={hideDrawer}>Title</Link>}>
            <Navigation>
              <DrawerLink _isIndex to={`/`}>Home</DrawerLink>
              <DrawerLink to={`/a`}>Link</DrawerLink>
              <DrawerLink to={`/b`}>Link</DrawerLink>
              <DrawerLink to={`/c`}>Link</DrawerLink>
            </Navigation>
          </Drawer>
          <ReactCSSTransitionGroup
            component={Content}
            className="react-transition"
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname,
            })}
          </ReactCSSTransitionGroup>
        </Layout> )

    }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
