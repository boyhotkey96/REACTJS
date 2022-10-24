import { useContext } from "react"
import { ThemeContext } from './ThemeProvider'

function Paragrap() {
    const context = useContext(ThemeContext)
    // console.log(context)
    return (
        <p className={context.theme}>Vua gọi là Hoàng thượng. Vua của đế quốc (thống trị các nước chư hầu) gọi là Hoàng đế. Vợ vua gọi là Hoàng hậu.Cha vua, nếu chưa từng làm vua gọi là Quốc lão; nếu đã từng làm vua rồi truyền ngôi cho con gọi là Thái thượng hoàng. Mẹ vua, nếu chồng chưa từng làm vua gọi là Quốc mẫu; nếu chồng đã từng làm vua gọi là Thái hậu hay Hoàng Thái hậu.</p>
    )
}

export default Paragrap