import React from 'react';
import BlackAlluvaIcon from 'imports/ui/components/icons/BlackAlluvaIcon';
import WhiteAlluvaIcon from 'imports/ui/components/icons/WhiteAlluvaIcon';
import Button from '@material-ui/core/Button';

export default class WelcomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }


  render() {

    return(
      <div className="div-welcomePage-container">

        <div className="div-content-container">
          <div className="div-blackAlluvaIcon-container"><BlackAlluvaIcon /></div>
          <div className="div-welcomePage-text">
            Turning ICO investment market noise into actionable data
          </div>

          <div className="div-button-container">
            <Button
              variant="contained"
              color="primary"
              className="button-signin"
            >Sign in</Button>
          </div>

          <div className="div-button-container">
            <Button
              variant="contained"
              color="primary"
              className="button-registerNow"
            >Register Now</Button>
          </div>
        </div>
      </div>
    );
  }

}
