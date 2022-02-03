import ITunesElementType from "../types/iTunesElement.type";
import { Dropdown } from "react-bootstrap";

type Props = {
  currentELements: Array<ITunesElementType>;
  order: any;
};

const OrderingComponent = (props: Props) => {
  return (
    <div className="row m-3">
      <div className="col-3 offset-9">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort list
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>A ... Z</Dropdown.Item>
            <Dropdown.Item>Z ... A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default OrderingComponent;
