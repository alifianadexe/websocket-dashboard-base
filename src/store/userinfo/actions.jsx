import { LOGIN_USER } from "./constant.jsx";

export function setUserinfo(userinfo) {
  const uuid = () => {
    let dt = new Date().getTime();
    return dt;
  };
  console.log(userinfo);
  return {
    payload: userinfo,
    uuid: uuid,
    type: LOGIN_USER,
  };
}
