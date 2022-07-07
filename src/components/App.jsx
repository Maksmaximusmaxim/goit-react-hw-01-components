import {Profile} from 'components/Profile/Profile';
import {Statistics} from 'components/Statistics/Statistics'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';
import {FriendList} from 'components/FriendList/FriendList';
import userData from 'dataFile/user.json';
import numberData from 'dataFile/data.json';
import  data  from 'dataFile/transactions.json';
import friends from 'dataFile/friends.json';
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

<ul>
  {<FriendList friends={friends} />}
</ul>

<TransactionHistory  items={data}/>
    </div>
  );
};
