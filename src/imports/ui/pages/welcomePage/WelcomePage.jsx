import React from 'react';
import BlackAlluvaIcon from 'imports/ui/components/icons/BlackAlluvaIcon';
import WhiteAlluvaIcon from 'imports/ui/components/icons/WhiteAlluvaIcon';
import Button from '@material-ui/core/Button';

import ReactSwipe from 'react-swipe';

import { Link } from "react-router-dom";

import { connect } from 'react-redux';

class WelcomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWelcomePageSwapped: false,
      windowSize: this.props.windowSize
    };
  }

  render() {
    return(
      <div className="div-welcomePage-container">
        <ReactSwipe className="reactSwipe-welcompage"
          swipeOptions={{ continuous: false }}>
          <div className="div-welcomePage-cover-container">
            <div className="div-whiteAlluvaIcon-container"><WhiteAlluvaIcon /></div>
          </div>
          <div className="div-content-container">
            <div className="div-content-wrapper">
              <div className="div-blackAlluvaIcon-container"><BlackAlluvaIcon /></div>
              <div className="div-welcomePage-text">
                Turning ICO investment market noise into actionable data
              </div>

              <div className="div-button-container">
                <Link to="/signin">
                  <Button
                    variant="contained"
                    color="primary"
                    className="button-signin"
                  >Sign in</Button>
                </Link>
              </div>

              <div className="div-button-container">
                <Link to="/signup">
                  <Button
                    variant="contained"
                    color="primary"
                    className="button-registerNow"
                  >Register Now</Button>
                </Link>
              </div>
            </div>
            
          </div>
        </ReactSwipe>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
    return {
        windowSize: state.windowEventReducer.windowSize
    };
};
export default connect(mapStateToProps)(WelcomePage);
