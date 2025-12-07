import '../css/pagination.css';

function Pagination() {
  return (
    <div className="pagination">
      <button className="page-btn disabled">Prev</button>

      <button className="page-btn active">1</button>
      <button className="page-btn">2</button>
      <button className="page-btn">3</button>
      <span className="dots">...</span>
      <button className="page-btn">10</button>

      <button className="page-btn">Next</button>
    </div>
  )
}

export default Pagination;