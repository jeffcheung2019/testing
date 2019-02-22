import React, { Component } from 'react';
import { SVGUniqueID } from 'react-svg-unique-id';

export default class CloseButtonIcon extends Component {

  render() {
    let iconClassName = "svg-common-center " + (this.props.iconClass ? this.props.iconClass : "");
    return (
      <SVGUniqueID>
      <svg className={iconClassName} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.272461" y="10.4719" width="14" height="2.2" rx="0.8" transform="rotate(-45 0.272461 10.4719)" fill="#E5E5E5"/>
      <rect x="1.82812" y="0.572449" width="14" height="2.2" rx="0.8" transform="rotate(45 1.82812 0.572449)" fill="#E5E5E5"/>
      </svg>
      </SVGUniqueID>

    )
  }
}
