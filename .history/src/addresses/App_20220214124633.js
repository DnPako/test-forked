import { useEffect, } from "react";
import "../styles.css";
import withRedux from "../commons/utils/withRedux";
import stateDispatchers from "./utils/stateDispatchers";
import Address from "./components/Address";
import SearchInput from "./components/SearchInput";

const { mapDispatchToProps, mapStateToProps } = stateDispatchers;

const App = (props) => {
  const {
    addressList,
    handleGetAddresses,
  } = props;

  console.log(addressList);

  useEffect(() => {
    handleGetAddresses();
  }, [handleGetAddresses]);

  return (
    <div className="App">
      <SearchInput />
      <h1>Addresse list</h1>
      <ul>
        <Address addressList={addressList} />
      </ul>
    </div>
  );
}

export default withRedux(mapStateToProps, mapDispatchToProps, App);
