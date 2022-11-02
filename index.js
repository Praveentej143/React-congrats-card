const element = (
  // Write your code here.
  <div className="bgContainer">
    <div className="card-container">
      <h1 className="heading">Congratulations</h1>
      <div className="congratsCard">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
        <h1 className="name">Kiran V</h1>
        <p className="instName">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>
        <img
          className="watch-img"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
