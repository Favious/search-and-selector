import ITunesElementType from "../types/iTunesElement.type";

type Props = {
  iTunesElements: Array<ITunesElementType>;
};

const ListedDataComponent = (props: Props) => {
  return (
    <div className="row mt-3">
      {props &&
        !(props.iTunesElements.length === 0) &&
        props.iTunesElements.map((element: ITunesElementType) => (
          <div className="bg-light m-1 border-dark">
            <div className="row">
              <div className="col-4">
                <div>
                  <img
                    src={element.artworkUrl100}
                    width="100px"
                    height="100px"
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="row">
                  <h5>{element.collectionCensoredName || element.trackName}</h5>
                </div>
                <div>
                  <h6>{element.artistName}</h6>
                </div>
                {element.collectionPrice && (
                  <div>
                    <h5 className="text-danger">{element.collectionPrice} $</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListedDataComponent;
