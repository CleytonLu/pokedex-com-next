import styles from "../styles/Pagination.module.css";

export const Pagination = ({
  nextPagination,
  prevPagination,
  pagination,
  pageCurrent,
  quantityPokemonsItem,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        id={pagination === 20 ? styles.opacity : styles.prev}
        onClick={() => prevPagination()}
      >
        Anterior
      </button>
      <span id={styles.current}> {pageCurrent} </span>
      <button
        id={quantityPokemonsItem === pageCurrent ? styles.opacity : styles.next}
        onClick={() => nextPagination()}
      >
        Próximo
      </button>
    </div>
  );
};
