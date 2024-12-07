import { css } from "./VisitList.module.css";
import VisitItem from "../VisitItem";

const VisitList = ({ visits }) => {
  return (
    <>
      <ul className={css.list}>
        {visits.map((visit) => (
          <VisitItem key={visit.id} visit={visit} />
        ))}
      </ul>
    </>
  );
};

export default VisitList;
