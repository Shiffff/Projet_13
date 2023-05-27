import Axios from "./caller.service";

let getUser = () => {
  return Axios.post("/user/profile");
};

let putUser = (user) => {
  return Axios.put("/user/profile", user);
};

export const userService = {
  getUser,
  putUser,
};
