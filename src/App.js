import "./App.css";
import News from "./components/News";
import Matches from "./components/Matches";
import Groups from "./components/Groups";
import { Routes, Route } from "react-router-dom";
import Main from "./Layout/Main";
import SingleTeam from "./components/SingleTeam";
import Teams from "./components/Teams";
import SingleNews from "./components/SingleNews";
import MatchDetails from "./components/MatchDetails";
import SinglePlayer from "./components/SinglePlayer";
import Stats from './components/Stats';
function App() {
  return (
    <div className="App">
        <Main>
          {/* <SingleNews /> */}
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news/:id" element={<SingleNews />} />
            <Route path="/team/:id" element={<SingleTeam />} />
            <Route path="/match/:id" element={<MatchDetails />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/player/:id" element={<SinglePlayer />} />
            <Route path="/stats" element={<Stats />} />
          </Routes> 
        </Main>
    </div>
  );
}

export default App;
