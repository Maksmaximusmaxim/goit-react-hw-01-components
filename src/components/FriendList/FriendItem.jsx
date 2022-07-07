import css from 'components/FriendList/FriendList.module.css';
export const FrItem =(({key,isOnline,avatar,name})=>{
      return  (<li key={key} className={css.item}> 
    <span className={isOnline ? css.on : css.off} ></span> 
   <img className="avatar" src={avatar} alt="User avatar" width="48" /> 
    <p className={css.name}>{name}</p> 
  </li>)  
}
);
// FrItem.propTypes={
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// };
  