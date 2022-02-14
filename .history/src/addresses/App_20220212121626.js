import "../styles.css";
import Address from "./components/Address";

// https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port

// we need to display a list of address:
// you have to retrieve the list from the url,
// show a loading indicator while fetching,
// then display somes informations from each result.
// => doc: https://adresse.data.gouv.fr/api-doc/adresse

// bonus: use an input to research an other query

export default function App() {
  return (
    <div className="App">
      <h1>Addresse list</h1>
      <ul>
        <Address />
      </ul>
    </div>
  );
}
