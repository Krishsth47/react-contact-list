import "./App.css";
import { ContactList } from "./components/ContactList";
import { SearchFilter } from "./components/SearchFilter";
import { Title } from "./components/Title";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        {/* title section */}
        <Title />
        {/* Search and filter section */}
        <SearchFilter />
        <hr />
        {/* user count */}
        <div className="row">
          <div className="col">55 users found</div>
        </div>
        {/* contact list cards */}
        <ContactList />
      </div>
    </div>
  );
};
export default App;
