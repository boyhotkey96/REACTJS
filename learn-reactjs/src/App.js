import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Todo2 from "~/features/Todo2";
import Album from "./features/Album";
import Todo from "~/features/Todo";
import TodoRender from "./features/TodoRender";
import ColorBox from "./features/ColorBox";

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
            </ul>
            <Routes>
                <Route exact={false} path="/album" element={<Album />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/todo2" element={<Todo2 />} />
                <Route path="/colorbox" element={<ColorBox />} />
                <Route path="/todorender" element={<TodoRender />} />
            </Routes>

            <h3>Footer</h3>
        </div>
    );
}

export default App;
