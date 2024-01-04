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

  const getTeamNames = teams.map(team => team.name);

  function deleteWorker() {
    console.log("Deletando worker")
  }

  function changeTeamColor(color, nameTeam) {
    setTeams(teams.map(team => {
      if (team.name === nameTeam) {
        team.primaryColor = color;
      }
      return team;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teamNames={getTeamNames}
        onRegisterWorker={(worker) => onNewWorkerRegistered(worker)}
      />
      {
        teams.map((team) => {
          return <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            onChangeTeamColor={changeTeamColor}
            workers={workers.filter(worker => worker.time === team.name)}
            onDelete={deleteWorker}
          />
        })
      }
    </div>
  );
}

export default App;
