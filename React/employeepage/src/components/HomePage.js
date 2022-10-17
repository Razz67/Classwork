import EmployeeList from "./EmployeeListItems";
import Header from "./Header";
import SearchBar from "./SearchBar";

function HomePage() {
    return (
        <div className="home">
            <Header />
            <SearchBar />
            <EmployeeList />
        </div>
    )
}

export default HomePage