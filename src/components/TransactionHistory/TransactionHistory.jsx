import css from 'components/TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types';
export const TransactionHistory = ({items})=>
  <table className={css.table}>
 <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={css.tbody}>
{items.map(({id,type,amount,currency})=>
        <tr key={id}>
        <td className={css.td}>{type}</td>
        <td className={css.td}>{amount}</td>
        <td className={css.td}>{currency}</td>
      </tr>
)}
  </tbody>
 </table>;
TransactionHistory.propTypes ={
  items:PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type : PropTypes.string.isRequired,
      amount :PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
}

