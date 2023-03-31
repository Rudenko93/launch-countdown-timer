import "./index.css"

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="title">
          <p>WE'RE LAUNCHING SOON</p>
        </div>
        <div className="counter">
          <div className="time days">
            <div className="box">23</div>
            <p>DAYS</p>
          </div>
          <div className="time hours">
            <div className="box">23</div>
            <p>HOURS</p>
          </div>
          <div className="time minutes">
            <div className="box">23</div>
            <p>MINUTES</p>
          </div>
          <div className="time seconds">
            <div className="box">23</div>
            <p>SECONDS</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="icons">
          <img src="/images/icon-facebook.svg" alt="a" />
          <img src="/images/icon-pinterest.svg" alt="b" />
          <img src="/images/icon-instagram.svg" alt="c" />
        </div>
      </footer>
    </div>
  )
}

export default App
