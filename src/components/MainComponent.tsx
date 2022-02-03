import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Form, Button } from "react-bootstrap";
import { useState } from "react";
import ITunesElementService from "../services/iTunesElement.service";
import ITunesElementType from "../types/iTunesElement.type";

const MainComponent = () => {
  let searchTerms = "";
  const [entitySelection, setEntitySelection] = useState("all");

  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-8">
          <Form.Control type="text" id="inputRequestTerms" />
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
          <Button className="col-12" variant="primary">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
