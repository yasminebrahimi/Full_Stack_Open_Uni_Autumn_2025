import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Blue Adam", number: "05827455555", id: 1 },
    { name: "Brown Yellow", number: "444444444", id: 2 },
    { name: "Blue Black", number: "8888990777", id: 3 },
    { name: "Green Red", number: "34565767878", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const nameChange = (event) => {
    setNewName(event.target.value);
  };

  const addNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const filterChange = (event) => {
    setSearch(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    //avoid dublicates
    const existedName = persons.some((person) => person.name === newName);

    if (existedName) {
      alert(`${newName} is already existed.`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  //search filter
  const searchFilter =
    search === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );

  return (
    <div>
      <h2>Filter</h2>
      <div>
        <input value={search} onChange={filterChange} />
      </div>

      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={nameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={addNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {searchFilter.map((person) => (
          <li key={person.name}>
            {person.name}
            {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
