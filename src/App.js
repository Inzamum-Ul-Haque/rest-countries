import "./App.css";
import Countries from "./components/Countries/Countries";
import District from "./components/District/District";

function App() {
  return (
    <div className="App">
      {/* <Countries /> */}
      <District name="Kushtia" speciality="Kulfi" />
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <h1>Hello from the component</h1>
//       <h4>Countries: {countries.length}</h4>
//       {countries.map((country) => (
//         <Country name={country.name.common} population={country.population} />
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <p>Population: {props.population}</p>
//     </div>
//   );
// }

export default App;
