import { useContext } from "react"
import '../App.css'
import Content from "./Content"
import { ThemeContext } from "./ThemeProvider"

function DemoContext() {
    const context = useContext(ThemeContext)
    // console.log(context)
    return (
        <div style={{ padding: "20px 40px", fontSize: "24px" }}>
            <button onClick={context.handleChangeTheme}>Change theme</button>
            <Content />
        </div>
    )
}

export default DemoContext