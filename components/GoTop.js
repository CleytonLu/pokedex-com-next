import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";
import Link from "next/link";
import styles from "../styles/GoTop.module.css";

export const GoTop = () => {
  return (
    <div>
      <Link className={styles.ArrowUp} href="#">
        <KeyboardArrowUp />
      </Link>
    </div>
  );
};
