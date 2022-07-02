import {Profile} from 'components/Profile/Profile';
import {Statistics} from 'components/Statistics/Statistics'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';
import {FriendList} from 'components/FriendList/FriendList';
import userData from 'user.json';
import numberData from 'data.json';
import  data  from 'transactions.json';
import friends from 'friends.json';
export const App = () => {
  return (
    <div>
      <Profile    
  username={userData.username}
  tag={userData.tag}
  location={userData.location}
  avatar={userData.avatar}
  stats={userData.stats}
  />
<Statistics title="Upload stats" stats={numberData} />

<FriendList friends={friends} />
<TransactionHistory  items={data}/>
    </div>
  );
};
