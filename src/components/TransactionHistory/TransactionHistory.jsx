import css from 'components/TransactionHistory/TransactionHistory.module.css'
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
{items.map(e=>
        <tr key={e.id}>
        <td className={css.td}>{e.type}</td>
        <td className={css.td}>{e.amount}</td>
        <td className={css.td}>{e.currency}</td>
      </tr>
)}
  </tbody>
 </table>


