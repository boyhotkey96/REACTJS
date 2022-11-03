import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Todo2 from "~/features/Todo2";
import Album from "./features/Album";
import Todo from "~/features/Todo";

function App() {
    return (
        <div className="App">
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
            </ul>
            <Routes>
                <Route exact={false} path="/album" element={<Album />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/todo2" element={<Todo2 />} />
            </Routes>

            <h3>Footer</h3>
        </div>
    );
}

export default App;
