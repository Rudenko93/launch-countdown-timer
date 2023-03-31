import { useState, useEffect } from "react"
import { Counter } from "./Counter"

const App: React.FC = (): JSX.Element => {
  const [distance, setDistance] = useState<number>(2000)

  useEffect(() => {
    const currentTime = new Date().getTime()

    let timePoint = window.localStorage.getItem("interval1290291")
    if (!timePoint || currentTime > parseInt(timePoint)) {
      timePoint = `${new Date().getTime() + 99965001}`
      window.localStorage.setItem("interval1290291", `${timePoint}`)
    }
    setDistance(parseInt(timePoint!) - currentTime)
  }, [])

  return (
    <div>
      <div className="content-wrapper">
        <div className="title">
          <p>WE'RE LAUNCHING SOON</p>
        </div>
        <Counter distance={distance} setDistance={setDistance} />
      </div>
      <footer>
        <div className="icons">
          <img src="/images/icon-facebook.svg" alt="" />
          <img src="/images/icon-pinterest.svg" alt="" />
          <img src="/images/icon-instagram.svg" alt="c" />
        </div>
      </footer>
    </div>
  )
}

export default App
