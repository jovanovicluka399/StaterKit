//Include Both Helper File with needed methods
// import { getFirebaseBackend } from "../../../helpers/firebase_helper";
// import {
//   postFakeLogin,
//   postJwtLogin,
//   postSocialLogin,
// } from "../../../helpers/fakebackend_helper";

// import {
//   postFakeLogin
// } from "../../../helpers/fakebackend_helper";

import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';
import { authHostAPI} from '../../../../pages/api/authHost-api';

//const fireBaseBackend = getFirebaseBackend();

export const loginUser = (user: any, router : any) => async (dispatch: any) => {

  try {
    authHostAPI
      .login(user.email.toLowerCase(), user.password)
      .then((data) => {        
        var finallogin: any = JSON.stringify(data);
        finallogin = JSON.parse(finallogin);
        if (finallogin.role && finallogin.token) {
          localStorage.setItem("authUser", JSON.stringify({role: finallogin.role, auth: finallogin.token}));
          dispatch(loginSuccess(finallogin));
           router.push('/dashboard', undefined, { shallow: true })
        } else {
          dispatch(apiError(finallogin));
        }
      })
      .catch((error) => {
        dispatch(apiError(error));
      });
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch: any) => {
  try {
    //localStorage.removeItem("authUser");

    localStorage.removeItem("authUser");
    dispatch(logoutUserSuccess(true));

    // if (process.env.NEXT_PUBLIC_DEFAULTAUTH === "firebase") {
    //   const response = fireBaseBackend.logout;
    //   dispatch(logoutUserSuccess(response));
    // } else {
    //   dispatch(logoutUserSuccess(true));
    // }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch: any) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};