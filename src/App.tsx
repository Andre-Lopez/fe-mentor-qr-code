import "./App.css"

function App() {
  return (
    <div className="App h-full w-full">
      <div className="background bg-light-grey h-full w-full overflow-auto flex items-center">
        <div className="card bg-white rounded-lg mx-auto w-60 drop-shadow-lg w-66">
          <div className="image-container flex flex-wrap justify-center p-4">
            <img src="image-qr-code.png" alt="qr code" className="image rounded-lg" />
          </div>
          <h1 className="title text-dark-blue font-bold text-sm font-outfit py-0 px-6 text-center h-auto">
            Improve your front-end skills by building projects
          </h1>
          <p className="subtitle text-gray-blue font-normal text-xs font-outfit py-2 pb-6 py px-4 text-center">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
