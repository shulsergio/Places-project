import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { selectVisits } from "../redux/visits/selectors";
import { fetchVisits } from "../redux/visits/operations";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import VisitList from "../components/VisitList/VisitList";

export default function VisitPage() {
  const dispatch = useDispatch();
  const visits = useSelector(selectVisits);
  const loading = useSelector((state) => state.visits.loading);
  const error = useSelector((state) => state.visits.error);

  useEffect(() => {
    if (selectIsLoggedIn) {
      dispatch(fetchVisits());
    }
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Err...</p>}
      <h1>Visits Page</h1>
      <VisitList visits={visits} />
    </>
  );
}
