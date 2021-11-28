import PropTypes from 'prop-types';

function Statistic({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="stat">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string,
};

export default Statistic;
