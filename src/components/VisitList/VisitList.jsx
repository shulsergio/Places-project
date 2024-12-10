import css from "./VisitList.module.css";
import VisitItem from "../VisitItem/VisitItem";
import { useDispatch } from "react-redux";
import { deleteVisit, fetchVisits } from "../../redux/visits/operations";
import VisitAddForm from "../VisitAddForm/VisitAddForm";
import clsx from "clsx";

const VisitList = ({ visits }) => {
  const dispatch = useDispatch();
  const onDelete = async (id) => {
    const result = await dispatch(deleteVisit(id));
    if (result.meta.requestStatus === "fulfilled") {
      await dispatch(fetchVisits());
    }
  };

  return (
    <>
      <div className={css.mainBox}>
        <div className={clsx(css.filterBox, css.border)}>
          <p className={css.visitsHeader}>Add visit</p>
          <VisitAddForm />
        </div>
        <div className={css.visitsBox}>
          <p className={clsx(css.visitsHeader, css.border)}>
            Visited locations:
          </p>
          <ul className={css.list}>
            {visits.map((visit) => (
              <li key={visit._id} className={css.movieItem}>
                <VisitItem visit={visit} onDelete={onDelete} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VisitList;
