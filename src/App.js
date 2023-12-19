import "./App.css";
import News from "./components/News";
import Matches from "./components/Matches";
import Groups from "./components/Groups";
import { Routes, Route } from "react-router-dom";
import Main from "./Layout/Main";
import SingleTeam from "./components/SingleTeam";
import Teams from "./components/Teams";
import SingleNews from "./components/SingleNews";
function App() {
  return (
    <div className="App">
        <Main>
          <SingleNews />
          {/* <Routes>
            <Route path="/" element={<News />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/teams" element={<Teams />} />
          </Routes> */}
        </Main>
    </div>
  );
}

export default App;
