import React, { Component } from 'react';
import { SVGUniqueID } from 'react-svg-unique-id';

export default class SideNavIcon extends Component {

  render() {
    let iconClassName = "svg-common-center " + (this.props.iconClass ? this.props.iconClass : "");
    return (
      <SVGUniqueID>
      <svg className={iconClassName} width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="13" height="2.2" rx="0.8" fill="#E5E5E5"/>
      <rect y="4.20001" width="14" height="2.2" rx="0.8" fill="#E5E5E5"/>
      <rect y="8.40002" width="11" height="2.2" rx="0.8" fill="#E5E5E5"/>
      </svg>
      </SVGUniqueID>




    )
  }
}
