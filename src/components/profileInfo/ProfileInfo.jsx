import PropTypes from 'prop-types';
import css from './ProfileInfo.module.css';

export const ProfileInfo = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <img className={css.avatar} src={avatar} alt="User avatar"></img>
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};
ProfileInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
