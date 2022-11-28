import useClock from "~/hooks/useClock";
import './style.scss';

function FeatureClock() {
  const {time} = useClock()

  return (
    <div className="clock-box">
      <p className="clock-box__time">{time}</p>
    </div>
  )
}

export default FeatureClock;
