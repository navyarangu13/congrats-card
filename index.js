const element = (
  <div className="congrats-card-container">
    <h1>Congratulations</h1>
    <div className="card">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h1 className="heading">Kiran V</h1>
      <p className="para">
        Vishnu Institute of Computer education and technology <br /> Bhimavaram{" "}
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
