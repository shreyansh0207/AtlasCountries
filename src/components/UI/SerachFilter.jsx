// ✅ SearchFilter ek component hai jo search, filter aur sort functionality handle karta hai
// Props ke through values pass ho rahi hain: search, setSearch, filter, setFilter, countries, setCountries

export const SearchFilter = ({
  search,         // user ka search input
  setSearch,      // search value ko update karne ka function
  filter,         // selected filter value (region)
  setFilter,      // filter value update karne ka function
  countries,      // countries data
  setCountries,   // countries data update karne ka function
}) => {

  //Input field mein value change hone par search update hoti hai
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  //Select dropdown change hone par region filter set hota hai
  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  //Countries ko naam ke hisaab se sort karta hai (ascending ya descending)
  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common) // asc
        : b.name.common.localeCompare(a.name.common); // desc
    });
    setCountries(sortCountry); // sorted result update
  };

  // return ho raha hai input, buttons aur dropdown ke saath
  return (
    <section className="section-searchFilter container">
      {/* 🔍 Search input */}
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      
      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      
      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      {/*Region Filter Dropdown */}
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
