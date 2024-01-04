import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Mock from './components/utils/mocks';

function App() {
  const [workers, setWorkers] = useState(Mock.mockWorkers)
  const onNewWorkerRegistered = (worker) => {
    setWorkers([...workers, worker])
  }
  const getTeamNames = Mock.mockTeams.map(team => team.name);

  const deleteWorker = () => {
    console.log("Deletando worker")
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teamNames={getTeamNames}
        onRegisterWorker={(worker) => onNewWorkerRegistered(worker)}
      />
      {
        Mock.mockTeams.map((team) => {
          return <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            workers={workers.filter(worker => worker.time === team.name)}
            onDelete={deleteWorker}
          />
        })
      }
    </div>
  );
}

export default App;
