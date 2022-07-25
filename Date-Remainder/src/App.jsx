import { useState } from "react";
import DatesContainer from "./components/DatesContainer/DatesContainer";
import Header from "./components/Header/Header";
import { allUsersData } from "./components/Shared/datesData";

function App() {
  const [, setDateData] = useState(allUsersData);

  const [updateData, setUpdatedData] = useState({
    value: true,
    showInfo: false,
    item: 0,
  });

  return (
    <div className="App">
      <Header />
      <DatesContainer
        allData={allUsersData}
        setUpdatedData={setUpdatedData}
        updateData={updateData}
        rerender={setDateData}
      />
    </div>
  );
}

export default App;
