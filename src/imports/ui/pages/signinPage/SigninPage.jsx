import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

class SigninPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="div-signinPage-container">
        <h2 className="h2-signin-text">Sign in</h2>
        <form className="form-signin" noValidate autoComplete="off">
          <div className="row div-signin-field">
            <TextField
              label="Username"
              placeholder="Enter Your User Name"
              margin="normal"
              InputLabelProps={{
                className: "label-signin"
              }}
              InputProps={{
                className: "input-signin"
              }}
            />
          </div>
          <div className="row div-signin-field">
            <TextField
              label="Password"
              placeholder="********************"
              margin="normal"
              InputLabelProps={{
                className: "label-signin"
              }}
              InputProps={{
                className: "input-signin"
              }}
            />
          </div>
          <div className="div-signin-button">
            <Button
              variant="contained"
              color="primary"
              className="button-signin"
            >Sign in</Button>
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
    return {
        windowSize: state.windowEventReducer.windowSize
    };
};

export default connect(mapStateToProps)(SigninPage);
