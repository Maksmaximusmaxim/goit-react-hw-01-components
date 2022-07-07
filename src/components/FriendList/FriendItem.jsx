import css from 'components/FriendList/FriendList.module.css';
export const FrItem =(({id,isOnline,avatar,name})=>{
      return   <li key={id} className={css.item}> 
    <span className={isOnline ? css.on : css.off} ></span> 
   <img className="avatar" src={avatar} alt="User avatar" width="48" /> 
    <p className={css.name}>{name}</p> 
  </li> 
}
);

  