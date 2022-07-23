import { useState } from "react";
import DatesContainer from "./components/DatesContainer/DatesContainer";
import Header from "./components/Header/Header";
import { allUsersData } from "./components/shared/datesData";

function App() {
  const [datesData, setDateData] = useState({
    id: 0,
    name: "",
    time: "",
    place: "",
    subject: "",
  });

  return (
    <div className="App">
      <Header />
      <DatesContainer allData={allUsersData} rerender={setDateData} />
    </div>
  );
}

export default App;
