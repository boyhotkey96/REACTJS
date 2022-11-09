import { Link, NavLink, Route, Routes } from "react-router-dom";
import Todo from "~/features/Todo";
import Todo2 from "~/features/Todo2";
import "./App.css";
import Album from "./features/Album";
import ColorBox from "./features/ColorBox";
import FetchApi from "./features/FetchApi";
import FetchApi2 from "./features/FetchApi2";
import TodoRender from "./features/TodoRender";

function App() {
    return (
        <div className="app">
            <h1>This is Header</h1>
            <ul>
                {" "}
                <h2>Menu</h2>
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
                    <Link to="/colorbox">Color Box</Link>
                </li>
                <li>
                    <Link to="/todorender">Todo Render</Link>
                </li>
                <li>
                    <Link to="/fetch-api">Fetch Api</Link>
                </li>
                <li>
                    <Link to="/fetch-api-2">Fetch Api 2</Link>
                </li>
            </ul>
            <Routes>
                <Route exact={false} path="/album" element={<Album />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/todo2" element={<Todo2 />} />
                <Route path="/colorbox" element={<ColorBox />} />
                <Route path="/todorender" element={<TodoRender />} />
                <Route path="/fetch-api" element={<FetchApi />} />
                <Route path="/fetch-api-2" element={<FetchApi2 />} />
            </Routes>

            <h3>Footer</h3>
        </div>
    );
}

export default App;
