import Heading from "./Heading"
import Paragrap from "./Paragrap"
import GlobalStyles from "./GlobalStyles"

function DemoCssModule() {
    return (
        <GlobalStyles>
            <div className="center color-red">
                <Heading />
                <Paragrap />
            </div>
        </GlobalStyles>
    )
}

export default DemoCssModule