import Profile from './components/Profile/Profile';
import data from './data/user.json';

function App() {
  return (
    <>
      <Profile
        img={data.avatar}
        name={data.username}
        tag={data.tag}
        location={data.location}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      />
    </>
  );
}

export default App;
