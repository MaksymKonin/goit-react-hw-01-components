import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { getBackgroundColorStatus } from 'utils/getBackgroundColorStatus.js';

export const FriendListItem = ({ status, avatar, name }) => {
  return (
    <>
      <span className={css[getBackgroundColorStatus(status)]}>{status}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.prototype = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
