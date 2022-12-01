import useMagicColor from "~/hooks/useMagicColor";
import  './style.scss'

function MagicColor() {
  const color = useMagicColor()

  return (
    <div className="magic-box" style={{ backgroundColor: color }}></div>
  )
}

export default MagicColor;