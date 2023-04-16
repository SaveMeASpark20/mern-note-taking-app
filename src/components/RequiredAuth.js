import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../stores/authStore";

export default function RequiredAuth(props) {
  const store = authStore();

    useEffect(() => {
        if(store.loggedIn === null)
            store.checkAuth();
    }, []);

    if(store.loggedIn === null)
        return <div> Loading... </div>;
      
    if(store.loggedIn === false)
        return <div> <Navigate to="/login" /> </div>

  return (
    <div>{ props.children }</div>
  )
}
