import { useState, } from "react";
import "../styles.css";
import Address from "./components/Address";
import SearchInput from "./components/SearchInput";
import { getAddresses, } from "./services/addressesServices";

const App = () => {
  const [addressList, setAddressList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchValue, setSearchValue] = useState('');


  const handleChange = ({ target: { value, }, }) => {
    setSearchValue(value);
    handleGetAddresses(value);
}

  const handleGetAddresses = async (searchValue) => {
    setLoader(true);
    try {
      const { data: { features, }, } = await getAddresses(searchValue);
      setAddressList(features);
    } catch (error) {
      setAddressList([]);
      console.log("Handling error here");
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className="App">
      <SearchInput searchValue={searchValue} handleChange={handleChange}/>
      <h1>Addresse list</h1>
      <ul>
        <Address loader={loader} addressList={addressList} />
      </ul>
    </div>
  );
}

export default App;
