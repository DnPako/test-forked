import { useEffect, } from "react";
import "../styles.css";
import withRedux from "../commons/utils/withRedux";
import stateDispatchers from "./utils/stateDispatchers";
import Address from "./components/Address";

const { mapDispatchToProps, mapStateToProps } = stateDispatchers;

// https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port

// we need to display a list of address:
// you have to retrieve the list from the url,
// show a loading indicator while fetching,
// then display somes informations from each result.
// => doc: https://adresse.data.gouv.fr/api-doc/adresse

// bonus: use an input to research an other query

const App = (props) => {
  const {
    handleGetAddresses,
  } = props;

  useEffect(() => {
    handleGetAddresses();
  }, [handleGetAddresses]);

  return (
    <div className="App">
      <h1>Addresse list</h1>
      <ul>
        <Address />
      </ul>
    </div>
  );
}

export default withRedux(mapStateToProps, mapDispatchToProps, App);
