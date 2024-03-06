import { useState } from "react";

export const usePagination = ({ pokemons }) => {
  const [pagination, setPagination] = useState(20);
  const [valuePartPagination, setValuePartPagination] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);

  const quantityPokemonsItem = Math.round(pokemons.length / 20);

  const nextPagination = () => {
    setPagination((prev) => prev + 20);
    setValuePartPagination((prev) => prev + 20);
    setPageCurrent((prev) => ++prev);

    if (quantityPokemonsItem === pageCurrent) {
      setPagination(pagination);
      setValuePartPagination(valuePartPagination);
      setPageCurrent(pageCurrent);
    }
  };

  const prevPagination = () => {
    setPagination((prev) => prev - 20);
    setValuePartPagination((prev) => prev - 20);
    setPageCurrent((prev) => --prev);

    if (pagination === 20) {
      setPagination(20);
      setValuePartPagination(0);
      setPageCurrent(1);
    }
  };

  return {
    nextPagination,
    prevPagination,
    pagination,
    pageCurrent,
    quantityPokemonsItem,
    valuePartPagination,
  };
};
