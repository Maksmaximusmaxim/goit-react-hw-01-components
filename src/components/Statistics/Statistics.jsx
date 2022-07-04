import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({stats , title})=>
<section className={css.section}>
  {title && <h2 className={css.h2}>{title}</h2>}

  <ul className={css.statlist}>

    {stats.map(({id,label,percentage}) =>
        <li key={id} className={css.item}  style={{background:getRandomHexColor()}}>
        <span className={css.label}>{label}</span>
        <span className={css.labelp}>{percentage}%</span>
        
      </li>
        )}
    
  </ul>
</section>;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

console.log(getRandomHexColor() );
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired
    })
  ),
  title:PropTypes.string,
}