import React, { Component } from 'react';
import { SVGUniqueID } from 'react-svg-unique-id';

export default class WalletWithTextIcon extends Component {

  render() {
    let iconClassName = "svg-common-center " + (this.props.iconClass ? this.props.iconClass : "");
    return (
      <SVGUniqueID>
      <svg className={iconClassName} width="56" height="69" viewBox="0 0 56 69" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
      <rect x="8" width="40" height="40" fill="url(#pattern6)"/>
      <path d="M14.5419 68H12.0419L9.44188 58.16L6.86188 68H4.36188L0.541875 54.66H3.16188L5.76188 64.94L8.52188 54.66H10.3819L13.1419 64.94L15.7219 54.66H18.3419L14.5419 68ZM27.0475 68H24.9475V66.96C24.2008 67.8133 23.1608 68.24 21.8275 68.24C20.9475 68.24 20.1675 67.96 19.4875 67.4C18.8075 66.8267 18.4675 66.04 18.4675 65.04C18.4675 64.0133 18.8008 63.2333 19.4675 62.7C20.1475 62.1667 20.9342 61.9 21.8275 61.9C23.2008 61.9 24.2408 62.3133 24.9475 63.14V61.7C24.9475 61.14 24.7408 60.7 24.3275 60.38C23.9142 60.06 23.3675 59.9 22.6875 59.9C21.6075 59.9 20.6542 60.3067 19.8275 61.12L18.9675 59.66C20.0608 58.62 21.4142 58.1 23.0275 58.1C24.2142 58.1 25.1808 58.38 25.9275 58.94C26.6742 59.5 27.0475 60.3867 27.0475 61.6V68ZM22.6475 66.8C23.7008 66.8 24.4675 66.4667 24.9475 65.8V64.34C24.4675 63.6733 23.7008 63.34 22.6475 63.34C22.0475 63.34 21.5542 63.5 21.1675 63.82C20.7808 64.14 20.5875 64.56 20.5875 65.08C20.5875 65.6 20.7808 66.02 21.1675 66.34C21.5542 66.6467 22.0475 66.8 22.6475 66.8ZM31.8702 68H29.7702V54.66H31.8702V68ZM36.6944 68H34.5944V54.66H36.6944V68ZM43.8786 68.24C42.4119 68.24 41.1986 67.7733 40.2386 66.84C39.2919 65.8933 38.8186 64.6667 38.8186 63.16C38.8186 61.7467 39.2786 60.5533 40.1986 59.58C41.1319 58.5933 42.3053 58.1 43.7186 58.1C45.1453 58.1 46.2919 58.5933 47.1586 59.58C48.0386 60.5667 48.4786 61.8267 48.4786 63.36V63.86H41.0186C41.0986 64.62 41.4119 65.2533 41.9586 65.76C42.5053 66.2667 43.2186 66.52 44.0986 66.52C44.5919 66.52 45.0853 66.4267 45.5786 66.24C46.0853 66.0533 46.5053 65.7933 46.8386 65.46L47.7986 66.84C46.8253 67.7733 45.5186 68.24 43.8786 68.24ZM46.4386 62.38C46.4119 61.7133 46.1653 61.12 45.6986 60.6C45.2453 60.08 44.5853 59.82 43.7186 59.82C42.8919 59.82 42.2453 60.08 41.7786 60.6C41.3119 61.1067 41.0519 61.7 40.9986 62.38H46.4386ZM53.4514 68.24C52.6381 68.24 52.0181 68.0267 51.5914 67.6C51.1781 67.1733 50.9714 66.56 50.9714 65.76V60.18H49.3714V58.34H50.9714V55.7H53.0714V58.34H55.0314V60.18H53.0714V65.24C53.0714 65.5867 53.1514 65.8667 53.3114 66.08C53.4714 66.28 53.6981 66.38 53.9914 66.38C54.4181 66.38 54.7314 66.2667 54.9314 66.04L55.4314 67.62C54.9914 68.0333 54.3314 68.24 53.4514 68.24Z" fill="#D1D1D1"/>
      <defs>
      <pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image6" transform="scale(0.00195312)"/>
      </pattern>
      <image id="image6" width="512" height="512" xlinkHref="data:image/png;base64,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"/>
      </defs>
      </svg>
      </SVGUniqueID>




    )
  }
}
