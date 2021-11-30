import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(item => (
          <tr className={s.tr} key={item.id}>
            <td className={s.td}>{item.type}</td>
            <td className={s.td}>{item.amount}</td>
            <td className={s.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
