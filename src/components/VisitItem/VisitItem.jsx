import css from "./VisitItem.module.css";
import clsx from "clsx";
const VisitItem = ({ visit, onDelete }) => {
  function formatDate(date) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    return `${day} ${month} ${year}`;
  }
  // const handleEdit

  // const handleDelete

  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        <p>{visit.name}</p>
        <span className={css.visitDate}>{formatDate("2024-05-10")}</span>
      </div>
      <div className={css.cardContent}>
        <p>
          <span>Country:</span> {visit.country}
        </p>
        <p>
          <span>City:</span> {visit.city}
        </p>
        <p>
          <span>Description:</span> {visit.description}
        </p>
        <p></p>
      </div>
      <div className={css.actions}>
        <button
          className={clsx(
            css.actionButton,
            css.editButton
          )} /*onClick={() => handleEdit()}*/
        >
          V
        </button>
        <button
          className={clsx(css.actionButton, css.deleteButton)}
          onClick={() => {
            console.log("VisitItem visit._id :", visit._id);
            onDelete(visit._id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default VisitItem;
