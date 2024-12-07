import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVisits } from "../redux/visits/operations";
import Loader from "../components/Loader/Loader";
import VisitList from "../components/VisitList/VisitList";
// import VisitForm from "../components/VisitForm/VisitForm";

export default function VisitPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.visits.loading);
  //   const error = useSelector((state) => state.visits.error);

  useEffect(() => {
    dispatch(fetchVisits());
  }, [dispatch]);

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
