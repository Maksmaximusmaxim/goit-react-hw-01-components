import css from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendList = ({friends})=>
    <ul >
 {friends.map(friend =>
     <li key={friend.id} className={css.item}> 
     <span className={friend.isOnline ? css.on : css.off} ></span> 
    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" /> 
     <p className={css.name}>{friend.name}</p> 
   </li> )}
       </ul> ;

FriendList.propTypes ={
    friends:PropTypes.array
}
