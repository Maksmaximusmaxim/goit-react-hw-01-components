import css from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({friends})=>
    <ul >
 {friends.map(({id,isOnline,avatar,name}) =>
     <li key={id} className={css.item}> 
     <span className={isOnline ? css.on : css.off} ></span> 
    <img className="avatar" src={avatar} alt="User avatar" width="48" /> 
     <p className={css.name}>{name}</p> 
   </li> )}
       </ul> ;

FriendListItem.propTypes ={
    id : PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
}
