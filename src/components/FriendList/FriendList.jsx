import css from 'components/FriendList/FriendList.module.css'
export const FriendList = ({friends})=>
    <ul className={css.ul-friends}>
 {friends.map(friend =>
     <li key={friend.id} className={css.item}>
  <span className="status">{friend.isOnline}</span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{friend.name}</p>
</li>)}
    </ul>
