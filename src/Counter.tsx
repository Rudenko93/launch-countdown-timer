import { useEffect } from "react"
import { getPadTime } from "./helpers/getPadTime"

interface ICounterProps {
  distance: number
  setDistance: React.Dispatch<React.SetStateAction<number>>
}

export const Counter: React.FC<ICounterProps> = ({ distance, setDistance }) => {
  const days = getPadTime(Math.floor(distance / (1000 * 60 * 60 * 24)))
  const hours = getPadTime(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  )
  const minutes = getPadTime(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  )
  const seconds = getPadTime(Math.floor((distance % (1000 * 60)) / 1000))

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance((distance) => (distance >= 1000 ? distance - 1000 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="counter">
      <div className="time days">
        <div className="box">{days}</div>
        <p>DAYS</p>
      </div>
      <div className="time hours">
        <div className="box">{hours}</div>
        <p>HOURS</p>
      </div>
      <div className="time minutes">
        <div className="box">{minutes}</div>
        <p>MINUTES</p>
      </div>
      <div className="time seconds">
        <div className="box">{seconds}</div>
        <p>SECONDS</p>
      </div>
    </div>
  )
}
