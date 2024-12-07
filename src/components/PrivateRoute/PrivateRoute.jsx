import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Убедитесь, что Component является функцией-компонентом
  if (typeof Component !== "function") {
    console.error("Invalid component passed to PrivateRoute");
    return <Navigate to={redirectTo} />;
  }

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};
