import { useState } from "react";
import { data } from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays Today</h3>
        <List people={people} />
        <button type="button" onClick={clearList} className="btn btn-block">
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
