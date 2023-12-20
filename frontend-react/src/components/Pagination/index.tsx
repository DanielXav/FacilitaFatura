import { ClientePage } from "../../types/cliente";

type Props = {
  page: ClientePage;
  onPageChange: (newPageNumber: number) => void;
};

function Pagination({ page, onPageChange }: Props) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${page.first ? 'disabled' : ''}`}>
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => onPageChange(page.number - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only"></span>
          </a>
        </li>
        {Array.from({ length: page.totalPages }, (_, index) => (
          <li
            key={index + 1}
            className={`page-item ${page.number === index ? 'active' : ''}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(index)}
            >
              {index + 1}
              {page.number === index && (
                <span className="sr-only"></span>
              )}
            </a>
          </li>
        ))}
        <li className={`page-item ${page.last ? 'disabled' : ''}`}>
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() => onPageChange(page.number + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
