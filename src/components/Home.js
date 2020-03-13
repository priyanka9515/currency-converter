import React from "react";

const Home = props => {
  const { currency } = props;
  let itemList = props.items.map(item => {
    return (
      <div
        className="card"
        style={{
          float: "left",
          marginTop: "100px",
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        key={item.id}
      >
        <div className="card-image">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="card-title" style={{ fontWeight: "bold" }}>
          {item.title}
        </div>

        <div className="card-content">
          <span style={{ marginTop: "20px" }}>
            {item.price} {currency}
          </span>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="box">{itemList}</div>
    </div>
  );
};
export default Home;
