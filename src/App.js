import "./App.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Results } from "./components/Results";
import { useState } from "react";
import { Loading } from "./components/Loading";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
    localtime: "",
  });

  const getWeather = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=46c4ba94cd29410fa59210518210207&q=${city}&aqi=no`
      )
      .then((res) => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon,
          localtime: res.data.location.localtime,
        });
        setCity("");
        setLoading(false);
      })
      .catch((err) =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form getWeather={getWeather} setCity={setCity} city={city} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
