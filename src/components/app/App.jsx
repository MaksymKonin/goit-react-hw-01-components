import userData from 'user.json';
import dataStats from 'data.json';
import dataFriends from 'friends.json';
import dataTransactions from 'transactions.json';
import css from './App.module.css';
import { ProfileInfo } from 'components/profileInfo/ProfileInfo';
import { ProfileStats } from 'components/profileStats/ProfileStats';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <div className={css.profile}>
        <ProfileInfo
          avatar={userData.avatar}
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
        />
        <ProfileStats
          followers={userData.stats.followers}
          views={userData.stats.views}
          likes={userData.stats.likes}
        />
      </div>
      <Statistics dataStats={dataStats} title={'Upload stats'} />
      <FriendList dataFriends={dataFriends} />
      <TransactionHistory dataTransactions={dataTransactions} />
    </div>
  );
};
