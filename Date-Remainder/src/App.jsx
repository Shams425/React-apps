import { useState } from "react";
import DatesContainer from "./components/DatesContainer/DatesContainer";
import Header from "./components/Header/Header";
import { allUsersData } from "./components/shared/datesData";

function App() {
  const [, setDateData] = useState(allUsersData);

  const [update, setUpdatedData] = useState({
    value: true,
    item: 0,
  });

  return (
    <div className="App">
      <Header />
      <DatesContainer
        allData={allUsersData}
        setUpdatedData={setUpdatedData}
        setData={update}
        rerender={setDateData}
      />
    </div>
  );
}

export default App;
