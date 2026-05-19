import { useEffect, useState } from "react";
import Config from "./Config/Config";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/Auth";
import {login, logout} from "./Store/AuthSlice";

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false));
  }, [])


  return !loading ? (
    <div className="App">
      <h1>Appwrite Authentication</h1>
    </div>
  ) : null;
}

export default App
