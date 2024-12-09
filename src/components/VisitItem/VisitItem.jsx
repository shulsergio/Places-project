import css from "./VisitItem.module.css";

const VisitItem = ({ visit }) => {
  return (
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

export default VisitItem;
