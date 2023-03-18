import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/statisticsItem/statisticsItem';
import { getRandomHexColor } from 'utils/getRandomHexColor.js';
import css from './Statistics.module.css';

export const Statistics = ({ dataStats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {dataStats.map(stat => {
          return (
            <li
              className={css.item}
              style={{ backgroundColor: getRandomHexColor() }}
              key={stat.id}
            >
              <StatisticsItem label={stat.label} percentage={stat.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  dataStats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
