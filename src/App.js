import userData from './data/user.json';
import statData from './data/statistic.json';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';

function App() {
  return (
    <>
      <Container>
        <Profile
          img={userData.avatar}
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          followers={userData.stats.followers}
          views={userData.stats.views}
          likes={userData.stats.likes}
        />
        <Statistic items={statData}></Statistic>
      </Container>
    </>
  );
}

export default App;
