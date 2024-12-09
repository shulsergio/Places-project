import css from "./VisitItem.module.css";

const VisitItem = ({ visit }) => {
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
    </div>
  );
};

/*
    <div className={css.item}>
      <p className={css.textItem}>
        Location:
        <span className={css.nameItem}> {visit.name}</span>
      </p>
      <p className={css.textItem}>
        Country:
        <span className={css.nameItem}> {visit.country}</span>
      </p>
      <p className={css.textItem}>
        City:
        <span className={css.nameItem}> {visit.city}</span>
      </p>
    </div>
  );
};
*/
export default VisitItem;
