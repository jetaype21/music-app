import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MusicList from "./components/musicList/MusicList";
import SliderComponent from "./components/slider/Slider";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [musicLocal, setMusicLocal] = useState([]);

  useEffect(() => {
    axios
      .get("/info.json")
      .then((res) => setMusicLocal(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
      <div className="App">
        <BrowserRouter>
          {/* Dejamos que el menú de navegacion sea para toda la aplicación */}
          <Header />

          {/* Generamos las rutas */}
          <Routes>
            <Route
              path="/"
              element={
                <Home>
                  <SliderComponent musicLocal={musicLocal} />
                </Home>
              }
            />
            {musicLocal.map((item) => (
              <Route
                path={item.route}
                element={
                  <Home>
                    <MusicList musicas={musicLocal} />{" "}
                  </Home>
                }
                key={item.category}
              />
            ))}
          </Routes> 
        </BrowserRouter>
      </div>

  );
}

export default App;
