import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </>
  );
};

TransactionItem.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
