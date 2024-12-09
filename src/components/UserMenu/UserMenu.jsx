import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("user.name in UserMenu:");
  console.log(user.name);
  console.log("user in UserMenu:");
  console.log(user);

  return (
    <div className={css.box}>
      <p className={css.nameBox}>
        Hello, <span className={css.nameText}> {user.name}</span>
      </p>
      <button
        className={css.button}
        onClick={() => {
          dispatch(logOut());
        }}
        type="button"
      >
        Log out
      </button>
    </div>
  );
};
export default UserMenu;
