import styles from "./VisitList.module.css";
import VisitItem from "../VisitItem/VisitItem";

const VisitList = ({ visits }) => {
  return (
    <>
      <ul className={styles.list}>
        {visits.map((visit) => (
          <VisitItem key={visit.id} visit={visit} />
        ))}
      </ul>
    </>
  );
};

export default VisitList;
