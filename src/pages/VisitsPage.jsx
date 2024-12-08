import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVisits } from "../redux/visits/operations";
import Loader from "../components/Loader/Loader";
import VisitList from "../components/VisitList/VisitList";
import { selectIsLoading } from "../redux/visits/selectors";
// import VisitForm from "../components/VisitForm/VisitForm";

export default function VisitPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVisits());
  }, [dispatch]);
  const loading = useSelector(selectIsLoading);
  const visits = useSelector((state) => state.visits.items);

  if (loading) {
    return <Loader />;
  }

  if (visits.length === 0) {
    return <div>No visits found</div>;
  }

  return (
    <>
      {/* <VisitForm /> */}
      {loading && <Loader />}
      {/* {error && <Heading title="Its wrong" />} */}
      {/*<SearchBox />*/}
      {<VisitList />}
    </>
  );
}

// export default function VisitsPage() {
//   return <h1>Visits Page</h1>;
// }
