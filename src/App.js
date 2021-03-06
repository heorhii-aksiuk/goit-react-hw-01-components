import userData from './data/user.json';
import statsData from './data/statistic.json';
import friendsData from './data/friends.json';
import transactionData from './data/transactions.json';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';

function App() {
  return (
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
      <Statistic title="Upload stats" stats={statsData}></Statistic>
      <FriendList items={friendsData}></FriendList>
      <TransactionHistory items={transactionData}></TransactionHistory>
    </Container>
  );
}

export default App;
