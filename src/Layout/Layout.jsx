import { Suspense } from "react";
import AppBar from "../components/AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.box}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
