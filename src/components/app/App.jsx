import userData from 'user.json';
import dataStats from 'data.json';
import css from './App.module.css';
import { ProfileInfo } from 'components/profileInfo/ProfileInfo';
import { ProfileStats } from 'components/profileStats/ProfileStats';
import { Statistics } from 'components/statistics/Statistics';

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
      <Statistics dataStats={dataStats} />
    </div>
  );
};
