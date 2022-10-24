import { useContext } from "react"
import Content from "./Content"
import { ThemeContext } from './ThemeProvider'

function Demo2Context() {
    const context = useContext(ThemeContext)
    // console.log(context)

    return (
        <div style={{ padding: "20px 40px" }}>
            <button style={{ cursor: "pointer" }} onClick={context.handleChangeTheme}>Change Theme</button>
            <Content />
        </div>
    )
}

export default Demo2Context