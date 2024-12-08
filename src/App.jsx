import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { fetchPlaces } from "./components/service/Api";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { refreshUser } from "./redux/auth/operations";
import { fetchVisits } from "./redux/visits/operations";
// import VisitsPage from "./pages/VisitsPage";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const LoginPage = lazy(() => import("./pages/LoginPage"));
  const RegisterPage = lazy(() => import("./pages/RegisterPage"));
  const VisitsPage = lazy(() => import("./pages/VisitsPage"));

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!isLoggedIn && refreshToken) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchVisits());
    }
  }, [dispatch, isLoggedIn]);

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
                redirectTo="/visits"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/visits" component={<LoginPage />} />
            }
          />
          <Route
            path="/visits"
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
