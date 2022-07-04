import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css'
export const Profile = ({username,tag,location,avatar,stats}) => {
  
  return  <div className={css.profile}>
  <div >
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
      width="250"
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul >
    <li>
      <span className={css.label}>Followers:</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views:</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes:</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object
}