import "./App.css";
import NavBar from "./navBar";
 import Products from "./products";
function App() {
  const products = [
    {
      id: 1,
      title: "Tečni puder",
      description: 
      "Tečni puder koji ima odličnu pokrivnu moć, pogodan za sve tipove kože.",
      amount: 0,
    },
    {
    id: 2,
      title: "Kameni puder",
      description: 
      "Kameni puder koji je pogodan za masnu kožu.",
      amount: 0,
    },
    {
    id: 3,
      title: "Maskara",
      description: 
      "Ova maskara podiže volumen prirodnih trepavica i odaje utisak veštačkih trepavica.",
      amount: 0,
    },


  ];
  return (
    <div className="App">
    <NavBar />
    <Products products={products} />
  </div>

  );
};
 
export default App;
