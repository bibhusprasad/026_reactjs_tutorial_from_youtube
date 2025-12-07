import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/eCart/productSlice'; // 👈 adjust path if needed
import '../css/pagination.css';

function Pagination() {
  const dispatch = useDispatch();

  const { page, total, limit } = useSelector((state) => state.products);

  const totalPages = Math.max(1, Math.ceil(total / (limit || 1)));

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return;
    dispatch(fetchProducts({ page: newPage, limit }));
  };

  // Create page numbers with dots: 1 ... 4 5 6 ... 10
  const getPages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [1];

    if (page > 3) {
      pages.push('left-dots');
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let p = start; p <= end; p++) {
      pages.push(p);
    }

    if (page < totalPages - 2) {
      pages.push('right-dots');
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = getPages();

  return (
    <div className="pagination">
      {/* Prev */}
      <button
        className={`page-btn ${page === 1 ? 'disabled' : ''}`}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Prev
      </button>

      {/* Page numbers */}
      {pages.map((p, i) => {
        if (p === 'left-dots' || p === 'right-dots') {
          return (
            <span key={p + i} className="dots">
              ...
            </span>
          );
        }

        return (
          <button
            key={p}
            className={`page-btn ${p === page ? 'active' : ''}`}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </button>
        );
      })}

      {/* Next */}
      <button
        className={`page-btn ${page === totalPages ? 'disabled' : ''}`}
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
