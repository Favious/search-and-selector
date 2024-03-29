import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import ITunesElementService from "../services/iTunesElement.service";
import ITunesElementType from "../types/iTunesElement.type";
import ListedDataComponent from "./ListedDataComponent";
import Pagination from "./PaginationComponent";
import OrderingComponent from "./OrderingComponent";

const MainComponent = () => {
  let searchTerms = "";
  const numberOfElementsPerPage: number = 5;
  const defaultEntityValue: string = "all";

  const [iTunesElements, setITunesElements] = useState([]);
  const [requestName, setRequestName] = useState("");
  const [entitySelection, setEntitySelection] = useState(defaultEntityValue);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(
    numberOfElementsPerPage
  );

  const updateSearchTerms = () => {
    searchTerms = requestName.toLowerCase().replace(" ", "+");
    if (entitySelection !== "all") {
      searchTerms += "&entity=" + entitySelection;
    }
  };

  const sendSearchTerms = async () => {
    updateSearchTerms();
    await ITunesElementService.getAll(searchTerms)
      .then((response) => {
        setITunesElements(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  let currentElements = iTunesElements.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const order = (customElements: any) => {
    setITunesElements(customElements);
  };

  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-8">
          <Form.Control
            type="text"
            id="inputRequestTerms"
            onChange={(event) => setRequestName(event.target.value)}
          />
        </div>
        <div className="col-2">
          <Dropdown>
            <Dropdown.Toggle
              className="col-12"
              variant="dark"
              id="dropdown-basic"
            >
              {entitySelection}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setEntitySelection("all")}>
                all
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("movie")}>
                movie
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("podcast")}>
                podcast
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("music")}>
                music
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("musicVideo")}>
                musicVideo
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("audiobook")}>
                audiobook
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("shortFilm")}>
                shortFilm
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("tvShow")}>
                tvShow
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("software")}>
                software
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEntitySelection("ebook")}>
                ebook
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-2">
          <Button
            className="col-12"
            variant="primary"
            onClick={sendSearchTerms}
          >
            Search
          </Button>
        </div>
      </div>
      <OrderingComponent currentELements={iTunesElements} order={order} />
      <ListedDataComponent iTunesElements={currentElements} />
      <Pagination
        elementsPerPage={elementsPerPage}
        totalElements={iTunesElements.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainComponent;
