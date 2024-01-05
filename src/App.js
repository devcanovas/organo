import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Mock from './components/utils/Mock';

function App() {
  const [workers, setWorkers] = useState(Mock.mockWorkers)
  const onNewWorkerRegistered = (worker) => {
    setWorkers([...workers, worker])
  }

  const [teams, setTeams] = useState(Mock.mockTeams);
  const onNewTeamRegistered = (team) => {
    setTeams([...teams, team])
  }
  const getTeamNames = teams.map(team => team.name);

  function deleteWorker(id) {
    setWorkers(workers.filter(worker => worker.id !== id));
  }

  function changeTeamColor(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  function doFavorite(id) {
    setWorkers(workers.map(worker => {
      if(worker.id === id) worker.isFavorite = !worker.isFavorite;
      return worker;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teamNames={getTeamNames}
        onRegisterWorker={(worker) => onNewWorkerRegistered(worker)}
        onRegisterTeam={team => onNewTeamRegistered(team)}
      />
      {
        teams.map((team) => {
          return <Team
            key={team.id}
            id={team.id}
            name={team.name}
            primaryColor={team.primaryColor}
            color={team.color}
            onChangeTeamColor={changeTeamColor}
            workers={workers.filter(worker => worker.time === team.name)}
            onDelete={deleteWorker}
            onFavorite={doFavorite}
          />
        })
      }
    </div>
  );
}

export default App;
