import css from "./VisitList.module.css";
import VisitItem from "../VisitItem/VisitItem";

const VisitList = ({ visits }) => {
  return (
    <>
      <div className={css.mainBox}>
        <div className={css.filterBox}>
          <p className={css.visitsHeader}>Filters:</p>
        </div>
        <div className={css.visitsBox}>
          <p className={css.visitsHeader}>Visited locations:</p>
          <ul className={css.list}>
            {visits.map((visit) => (
              <li key={visit.id} className={css.movieItem}>
                <VisitItem visit={visit} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VisitList;
