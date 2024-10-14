import _ from 'lodash';
import { useState } from 'react';
import './App.scss';
import Comment from './comment';
import CommentInput from './commentInput';

import CommentInputRef from './commentInputRef';
import { CommentModule, initialUsersList } from './commentList';
import NavTab from './navTab';





const App = () => {
  const [usersList, setUserList] = useState<CommentModule[]>(initialUsersList);

  function sortByLikes() {

    const sortedList = _.orderBy(usersList, ['like'], ['desc']);
    setUserList(sortedList);
  }

  function sortByDate() {

    const sortedList = _.orderBy(usersList, ['ctime'], ['desc']);
    setUserList(sortedList);
  }

  return (
    <div className="app">
      <>
        <NavTab length={usersList.length} sortByLikes={sortByLikes} sortByDate={sortByDate}></NavTab>
      </>
      <div className="reply-wrap">
        <>
          <CommentInput addNewComment={(newComment) =>
            setUserList([newComment, ...usersList])
          }></CommentInput>
          <div style={{ height: "30px" }} />
          <CommentInputRef addNewComment={(newComment) =>
            setUserList([newComment, ...usersList])
          }></CommentInputRef>
        </>
        <>
          {usersList.map((item) => (
            <Comment key={item.rpid} comment={item}></Comment>
          ))}
        </>
      </div>
    </div >
  );
};

export default App;