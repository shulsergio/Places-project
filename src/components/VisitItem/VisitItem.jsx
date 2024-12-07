const VisitItem = ({ visit }) => {
  return (
    <li>
      <p>{visit.name}</p>
      <p>{visit.country}</p>
      <p>{visit.city}</p>
    </li>
  );
};

export default VisitItem;
