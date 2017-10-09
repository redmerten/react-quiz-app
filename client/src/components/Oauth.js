/**
 * Created by CameronMerten on 10/2/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import {Icon} from 'react-fa'


const GoogleOauth = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <GoogleLogin style={{'align': 'center', "padding":"10px"}}
      clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    >
      <Icon  name="google" />
      <span> Login with Google</span>

    </GoogleLogin>
  )
}

export default GoogleOauth