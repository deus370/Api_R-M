import React from "react";

const Pagination = ({ prev, sig, previa, siguiente }) => {
  const PaginaPrevia = () => {
    previa();
  };

  const SigiuentePagina = () => {
    siguiente();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={PaginaPrevia}>
              Anterior
            </button>
          </li>
        ) : null}
        {sig ? (
          <li className="page-item">
            <button className="page-link" onClick={SigiuentePagina}>
              Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
