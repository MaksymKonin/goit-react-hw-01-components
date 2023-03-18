import PropTypes from 'prop-types';
import css from './statisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

//
