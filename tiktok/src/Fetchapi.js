import { useState, useEffect } from "react";

function Content() {
  const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("todos");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setPosts(data);
      });
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {type === "posts" ? (
              post.body
            ) : type === "comments" ? (
              post.email
            ) : type === "albums" ? (
              post.title
            ) : type === "photos" ? (
              <img src={`${post.url}`} width="100px" alt="photos" />
            ) : type === "todos" ? (
              `${post.completed}`
            ) : type === "users" ? (
              post.name
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Fetchapi() {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Content />}
    </div>
  );
}

export default Fetchapi;
