import { useEffect, useState } from "react";

function Content() {
  const tabs = [
    "posts",
    "comments",
    "albums",
    "photos",
    "todos",
    "users",
    "resize",
  ];
  let arrResize = [];
  let objResize = {};
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState(tabs[1]);
  const [showGototop, setShowgototop] = useState(false);
  const [width, setWidth] = useState(() => {
    objResize.width = window.innerWidth;
    arrResize.push(objResize);
    return arrResize;
  });

  useEffect(() => {
    if (type === tabs[tabs.length - 1]) {
      setPosts(width);
      const handleResize = () => {
        arrResize = [];
        objResize.width = window.innerWidth;
        arrResize.push(objResize);
        console.log(arrResize);
        setWidth(arrResize);
      };
      window.addEventListener("resize", handleResize);
      // cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } else {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return setPosts(data);
        });
    }
  }, [type]);

  useEffect(() => {
    setPosts(width);
  }, [width]);

  useEffect(() => {
    const handleScroll = () => {
      setShowgototop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => {
      console.log("unmouting...");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGototop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={tab === type ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={`${post.id}`}>
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
            ) : type === tabs[tabs.length - 1] ? (
              `innerWidth = ${post.width}`
            ) : null}
          </li>
        ))}
      </ul>
      {showGototop && (
        <button
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            cursor: "pointer",
          }}
          onClick={handleGototop.bind(null)}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

function Fetchapi() {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button
        style={toggle ? { color: "#fff", backgroundColor: "#333" } : {}}
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
      {toggle && <Content />}
    </div>
  );
}

export default Fetchapi;
