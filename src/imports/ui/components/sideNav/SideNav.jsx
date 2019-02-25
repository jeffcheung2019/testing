import React from 'react';
import WhiteAlluvaIcon from 'imports/ui/components/icons/WhiteAlluvaIcon';
import DashboardWithTextIcon from 'imports/ui/components/icons/DashboardWithTextIcon';
import NotificationWithTextIcon from 'imports/ui/components/icons/NotificationWithTextIcon';
import WalletWithTextIcon from 'imports/ui/components/icons/WalletWithTextIcon';
import ProfileWithTextIcon from 'imports/ui/components/icons/ProfileWithTextIcon';
import CloseButtonIcon from 'imports/ui/components/icons/CloseButtonIcon';
import SideNavIcon from 'imports/ui/components/icons/SideNavIcon';

import { connect } from 'react-redux';

class SideNav extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mobileSideNavIsOpen: false
    };
    this.onClickOpenCloseMenu = this.onClickOpenCloseMenu.bind(this);
  }

  onClickOpenCloseMenu(){
    let prevOpenStatus = this.state.mobileSideNavIsOpen;
    this.setState({
      mobileSideNavIsOpen: !prevOpenStatus
    })
  }

  mobileSideNavContent(){
    //let containerClassname = "div-sideNav-container-m " + ((this.state.mobileSideNavIsOpen) ? "mobile-sideNav-on" : "mobile-sideNav-off");
    let containerClassname = "div-sideNav-container-m " + ((this.state.mobileSideNavIsOpen) ? "mobile-sideNav-normal-position" : "mobile-sideNav-left-overflow-position");
    let sideNavIconClassname = "div-sideNavIcon-container " + ((this.state.mobileSideNavIsOpen) ? "mobile-sideNav-off" : "mobile-sideNav-on");
    return (
        <>
          <div onClick={this.onClickOpenCloseMenu} className={sideNavIconClassname}>
            <SideNavIcon />
          </div>
          <div className={containerClassname}>
            <div onClick={this.onClickOpenCloseMenu} className="div-closeButtonIcon-container"><CloseButtonIcon /></div>
            <div className="div-linkList-container">
              <div className="div-link">Dashboard</div>
              <div className="div-link">Profile</div>
              <div className="div-link">Wallet</div>
              <div className="div-link">Transactions</div>
              <div className="div-link">Settings</div>
              <div className="div-link-Logout">Logout</div>
            </div>
          </div>
        </>
      );
  }

  render() {

    return ((this.props.windowSize.isMobile) ? (
      this.mobileSideNavContent()
    ):
      (
        <div className="div-sideNav-container">
          <div className="div-whiteAlluvaIcon-container"><WhiteAlluvaIcon /></div>
          <div className="div-sideNav-splitter"></div>
          <div className="div-iconList-container">
            <div className="div-icon-container"><DashboardWithTextIcon /></div>
            <div className="div-icon-container"><NotificationWithTextIcon /></div>
            <div className="div-icon-container"><WalletWithTextIcon /></div>
            <div className="div-icon-container"><ProfileWithTextIcon /></div>
          </div>
          <div className="div-logout-link">Logout
          </div>
        </div>
      )
    );
  }

}

const mapStateToProps = (state) => {
    return {
        windowSize: state.windowEventReducer.windowSize
    };
};

export default connect(mapStateToProps)(SideNav);
