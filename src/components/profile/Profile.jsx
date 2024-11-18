import css from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <p className={css.label}>Followers</p>
          <p className={css.quantity}>{stats.followers}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.label}>Views</p>
          <p className={css.quantity}>{stats.views}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.label}>Likes</p>
          <p className={css.quantity}>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
