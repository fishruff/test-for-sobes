import { useState, useEffect } from "react";
//components
import Header from "./componets/Header";
import SliderBlock from "./componets/Slider";
import Posts from "./componets/Posts";

function App() {
  const [users, SetUser] = useState([]);
  const [posts, SetPosts] = useState([]);
  //get Users

  const GetUsers = async () => {
    const temp = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
      (res) => res.json()
    );
    SetUser(temp);
  };

  const GetPosts = async () => {
    const temp = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
      (res) => res.json()
    );
    SetPosts(temp);
  };

  useEffect(() => {
    GetUsers();
    GetPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      <SliderBlock users={users} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
