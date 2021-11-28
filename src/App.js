import data from './data/user.json';
import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';

function App() {
  return (
    <>
      <Section>
        <Profile
          img={data.avatar}
          username={data.username}
          tag={data.tag}
          location={data.location}
          followers={data.stats.followers}
          views={data.stats.views}
          likes={data.stats.likes}
        />
      </Section>
    </>
  );
}

export default App;
