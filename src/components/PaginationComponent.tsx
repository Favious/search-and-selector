import ITunesElementType from "../types/iTunesElement.type";

type Props = {
  elementsPerPage: number;
  totalElements: number;
  paginate: any;
};

const Pagination = (props: Props) => {
  const pageNumbers = [];

  for (
    let pageNumber = 1;
    pageNumber <= Math.ceil(props.totalElements / props.elementsPerPage);
    pageNumber++
  ) {
    pageNumbers.push(pageNumber);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => props.paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
