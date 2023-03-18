import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ dataFriends }) => {
  return (
    <ul className={css['friend-list']}>
      {dataFriends.map(friend => {
        return (
          <li className={css.item} key={friend.id}>
            <FriendListItem
              status={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  dataFriends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
