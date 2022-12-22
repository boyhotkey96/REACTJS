import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Todo from "~/features/Todo";
import Todo2 from "~/features/Todo2";
import "./App.css";
import MagicColor from "./features/ MagicColor";
import Album from "./features/Album";
import Clock from "./features/Clock";
import ColorBox from "./features/ColorBox";
import FetchApi from "./features/FetchApi";
import FetchApi2 from "./features/FetchApi2";
import IdRandom from "./features/IdRandom";
import NumbersRandomStorage from "./features/NumbersRandomStorage";
import MainPhotoLayout from "./features/Photos/MainPhotoLayout";
import TodoRender from "./features/TodoRender";

function App() {
  return (
    <div className="app">
      <h1 className="header">This is Header</h1>
      <ul>
        {" "}
        <h3>Menu</h3>
        <li>
          <NavLink
            to="/album"
            className={(data) => (data.isActive ? "active-menu" : null)}
          >
            Album
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo"
            className={({ isActive }) => (isActive ? "active-menu" : undefined)}
          >
            Todo List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo2"
            className={({ isActive }) => (isActive ? "active-menu" : null)}
          >
            Todo List 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/colorbox">Color Box</NavLink>
        </li>
        <li>
          <NavLink to="/todorender">Todo Render</NavLink>
        </li>
        <li>
          <NavLink to="/fetch-api">Fetch Api</NavLink>
        </li>
        <li>
          <NavLink to="/fetch-api-2">Fetch Api 2</NavLink>
        </li>
        <li>
          <NavLink to="/clock">Clock</NavLink>
        </li>
        <li>
          <NavLink to="/magic-color">Magic Color: using custom hook</NavLink>
        </li>
        <li>
          <NavLink to="/idrandom">ID Random</NavLink>
        </li>
        <li>
          <NavLink to="/number-random-storage">Numbers Random Storage</NavLink>
        </li>
        <li>
          <NavLink to="/photos">Photo using Redux toolkit</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Navigate to="/album" />} />
        <Route exact={false} path="/album" element={<Album />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo2" element={<Todo2 />} />
        <Route path="/colorbox" element={<ColorBox />} />
        <Route path="/todorender" element={<TodoRender />} />
        <Route path="/fetch-api" element={<FetchApi />} />
        <Route path="/fetch-api-2" element={<FetchApi2 />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/magic-color" element={<MagicColor />} />
        <Route path="/idrandom" element={<IdRandom />} />
        <Route
          path="/number-random-storage"
          element={<NumbersRandomStorage />}
        />
        {/* Case 1; */}
        {/* <Route path="/photos" element={<MainPhotoLayout />}>
            <Route index element={<Add />} />
            <Route path="/photos/add" element={<AddPhoto />} />
          </Route> */}
        <Route path="/photos/*" element={<MainPhotoLayout />} />
        <Route path="*" element={<p>404: Không tìm thấy trang!</p>} />
      </Routes>
      <h2 className="footer">Footer</h2>
    </div>
  );
}

export default App;
