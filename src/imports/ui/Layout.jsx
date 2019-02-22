import React from 'react';
import SideNav from 'imports/ui/components/sideNav/SideNav';
import { renderRoutes } from 'react-router-config';
import _throttle from 'lodash/throttle';

export default class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
    this.resizeThrottle = _throttle(this.handleResizeLogic.bind(this), 300)
  }

  handleResizeLogic(){
    console.log(">>> Layout:handleResizeLogic")
    this.setState({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    })
  }

//resize event will be passed to redux store
  componentDidMount(){
    window.addEventListener('resize', this.resizeThrottle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeThrottle);
  }

  render() {
    let windowSize = {
      windowWidth: this.state.innerWidth,
      windowHeight: this.state.innerHeight,
      isMobile: this.state.innerWidth < 992
    }

    return (
    <div className="div-layout-container">
      <SideNav windowSize={windowSize}/>
      <div className="div-renderRoutes-container">
        {renderRoutes(this.props.route.routes)}
      </div>
    </div>);
  }

}
