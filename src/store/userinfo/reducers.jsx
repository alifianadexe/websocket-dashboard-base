import { LOGIN_USER } from "./constant.jsx";
const defaultinfo = {
  username: "",
  password: "",
};

function userinfo(state = defaultinfo, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        username: action.payload.username,
        password: action.payload.password,
      };
      break;

    default:
      break;
  }

  return defaultinfo;
}

export default userinfo;
