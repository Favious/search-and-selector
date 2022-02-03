import ITunesElementType from "../types/iTunesElement.type";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";

type Props = {
  currentELements: Array<ITunesElementType>;
  order: any;
};

const OrderingComponent = (props: Props) => {
  const sortElementsByNameAscending = () => {
    const customElements: Array<ITunesElementType> = props.currentELements;
    customElements.sort((a: ITunesElementType, b: ITunesElementType) => {
      return (
        (a.collectionCensoredName.charCodeAt(0) ||
          a.trackName.charCodeAt(0) - b.collectionCensoredName.charCodeAt(0) ||
          b.trackName.charCodeAt(0)) * 1
      );
    });
    props.order(customElements);
  };

  const sortElementsByNameDescending = () => {
    const customElements: Array<ITunesElementType> = props.currentELements;
    customElements.sort((a: ITunesElementType, b: ITunesElementType) => {
      return (
        (a.collectionCensoredName.charCodeAt(0) ||
          a.trackName.charCodeAt(0) - b.collectionCensoredName.charCodeAt(0) ||
          b.trackName.charCodeAt(0)) * -1
      );
    });
    props.order(customElements);
  };

  return (
    <div className="row m-3">
      <div className="col-3 offset-9">
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Sort list
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={sortElementsByNameAscending}>
              A ... Z
            </Dropdown.Item>
            <Dropdown.Item onClick={sortElementsByNameDescending}>
              Z ... A
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default OrderingComponent;
