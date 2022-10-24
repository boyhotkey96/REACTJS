import { useContext } from "react"
import { ThemeContext } from './ThemeProvider'

function Paragrap() {
    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Khi tấu trình, các quan gọi vua là bệ hạ, thánh thượng. Các quan tự xưng với vua là hạ thần.
            Khi nói chuyện với vua và hoàng hậu, các quan thái giám xưng là nô tài; cung nữ chuyên phục dịch xưng là nô tì.
        </p>
    )
}

export default Paragrap