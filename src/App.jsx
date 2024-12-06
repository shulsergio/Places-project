import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { fetchPlaces } from "./components/service/Api";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const LoginPage = lazy(() => import("./pages/LoginPage"));
  const RegisterPage = lazy(() => import("./pages/RegisterPage"));
  const VisitsPage = lazy(() => import("./pages/VisitsPage"));

  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("isLoggedIn in App component:", isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Toaster position="top-center" />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<VisitsPage />} />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
