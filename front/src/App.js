import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./utils/Router";
import { accountService } from "./services/account_service";
import { userService } from "./services/user.service";
import { setUserData } from "./feature/user.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (accountService.isLogged()) {
      userService.getUser().then((res) => {
        dispatch(setUserData(res.data.body));
      });
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Router />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
