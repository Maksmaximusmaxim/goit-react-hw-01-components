import { FrItem } from 'components/FriendList/FriendItem';
import PropTypes from 'prop-types';
export const FriendList = ({friends})=>{
   return (  <ul>
 {friends.map(({id,isOnline,avatar,name}) =>
  <FrItem key={id} isOnline={isOnline} avatar={avatar} name={name}/>
  )}
     </ul>);
}
 
FriendList.propTypes ={
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}
