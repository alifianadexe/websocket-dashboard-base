import BaseBoard from "../../base/BaseBoard";
import Component from "../../config/LinkRouter";
import Login from "./Login/Login";

export default function MainDashboard(props) {
  return (
    <BaseBoard>
      <Login />
    </BaseBoard>
  );
}
