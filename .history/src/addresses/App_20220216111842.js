import "../styles.css";
import Address from "./components/Address";
import SearchInput from "./components/SearchInput";
import { getAddresses, } from "./services/addressesServices";

const App = (props) => {
  const {
    addressList,
  } = props;

  const handleGetAddresses = async (searchValue) => {
    try {
      const response = await getAddresses(searchValue);
      console.log(response);
    } catch (error) {
      
    }
  }

  return (
    <div className="App">
      <SearchInput handleGetAddresses={handleGetAddresses}/>
      <h1>Addresse list</h1>
      <ul>
        {/* {<Address addressList={addressList} />} */}
      </ul>
    </div>
  );
}

export default App;
