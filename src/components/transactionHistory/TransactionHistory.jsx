import PropTypes from 'prop-types';
import { TransactionItem } from 'components/transactionItem/TransactionItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ dataTransactions }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.thAmount}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {dataTransactions.map(transaction => {
          return (
            <tr className={css.tr} key={transaction.id}>
              <TransactionItem
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  dataTransactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
