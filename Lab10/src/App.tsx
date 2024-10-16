import axios from 'axios';
import { KeyboardEvent, useState } from 'react';
import './App.css';
import { User, UserResponse } from './UserResponse';

function App() {
  const [users, setUsers] = useState<User[]>(() => []);

  const searchForUser = (value: string) => {
    axios
      .get<UserResponse>(`https://api.github.com/search/users?q=${value}`)
      .then((response) => {
        setUsers(response.data.items);
      });
  };

  return (
    <div id="app">
      <div className="container">
        <HeaderSearch searchForUser={searchForUser} />
        <div className="row">
          {users.map((user) =>
            <GithubUser key={user.id} user={user} />
          )}


        </div>
      </div>
    </div>
  );
}

export default App;


function GithubUser({ user }: { user: User; }) {
  return (
    <div className="card">
      <a href={user.html_url} >
        <img src={user.avatar_url} style={{ 'width': '100px' }} />
      </a>
      <p className="card-text">{user.login}</p>
    </div>
  );
}


function HeaderSearch(props: { searchForUser: (value: string) => void; }) {
  const [searchValue, setSearchValue] = useState<string>('');
  const keyUpHander = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.searchForUser(e.currentTarget.value);
    }
  };
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" onKeyUp={keyUpHander} value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} />
        <button onClick={() => props.searchForUser(searchValue)}>Search</button>
      </div>
    </section>
  );
}