import css from 'components/Statistics/Statistics.module.css';
export const Statistics = ({stats , title})=>
<section className={css.section}>
  {title && <h2 className={css.h2}>{title}</h2>}

  <ul className={css.statlist}>

    {stats.map(stat =>
        <li key={stat.id} className={css.item}  style={{background:getRandomHexColor()}}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.labelp}>{stat.percentage}%</span>
        
      </li>
        )}
    
  </ul>
</section>;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

console.log(getRandomHexColor() )