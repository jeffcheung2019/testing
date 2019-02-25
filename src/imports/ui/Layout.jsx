import React from 'react';
import SideNav from 'imports/ui/components/sideNav/SideNav';
import { renderRoutes } from 'react-router-config';
import _throttle from 'lodash/throttle';

import { connect } from 'react-redux';
import { syncWindowSize } from "imports/redux/windowEvent/WindowEventActions";

import { mobileMaxWidth } from "common/constants/constants.js";

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.resizeThrottle = _throttle(this.handleResizeLogic.bind(this), 300)
  }

  handleResizeLogic(){
    this.props.syncWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < mobileMaxWidth
    });
  }

//resize event will be passed to redux store
  componentDidMount(){
    this.props.syncWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < mobileMaxWidth
    });
    window.addEventListener('resize', this.resizeThrottle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeThrottle);
  }

  render() {
    return (
    <div className="div-layout-container">
      <SideNav />
      <div className="div-renderRoutes-container">
        {renderRoutes(this.props.route.routes)}
      </div>
    </div>);
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
      syncWindowSize : (windowSize) => dispatch(syncWindowSize(windowSize))
    };
};
export default connect(null, mapDispatchToProps)(Layout);
