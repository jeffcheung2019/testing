import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class SignupPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="div-signupPage-container">
        <h2 className="h2-signup-text">Sign up</h2>
        <form className="form-signup" noValidate autoComplete="off">
          <div className="row div-signup-field">
            <TextField
              label="Full Name"
              placeholder="Enter Your Full Name"
              margin="normal"
              InputLabelProps={{
                className: "label-signup"
              }}
              InputProps={{
                className: "input-signup"
              }}
            />
          </div>
          <div className="row div-signup-field">
            <TextField
              label="Email Address"
              placeholder="Enter Your Email Address"
              margin="normal"
              InputLabelProps={{
                className: "label-signup"
              }}
              InputProps={{
                className: "input-signup"
              }}
            />
          </div>
          <div className="row div-signup-field">
            <TextField
              label="Password"
              placeholder="********************"
              margin="normal"
              InputLabelProps={{
                className: "label-signup"
              }}
              InputProps={{
                className: "input-signup"
              }}
            />
          </div>
          <div className="div-signup-button">
            <Button
              variant="contained"
              color="primary"
              className="button-signup"
            >Sign up</Button>
          </div>
        </form>

      </div>);
  }

}
