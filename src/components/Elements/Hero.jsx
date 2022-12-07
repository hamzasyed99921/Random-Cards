import React, { useState, useEffect } from "react";

const data = [
  { id: "1", title: "Silver", cardNo: "1" },
  { id: "2", title: "Bronze", cardNo: "2" },
  { id: "3", title: "Diamond", cardNo: "3" },
  { id: "4", title: "Gold", cardNo: "4" },
];

const Hero = () => {
  const [random, setRandom] = useState("");
  const [show, setShow] = useState(false);
  const randomNumber = () => {
    // setRandom(Math.floor(Math.random() * data.length) + 1);
    setShow(true);
    let test = pick_random();
    setRandom(test);
  };

  useEffect(() => {
    setTimeout(function () {
      setShow(false);
    }, 4000);
  }, [random]);
  const set = { 1: 0.4, 2: 0.3, 3: 0.2, 4: 0.1 };

  // get probabilities sum:
  var sum = 0;
  for (let j in set) {
    sum += set[j];
  }

  console.log(pick_random());
  function pick_random() {
    var pick = Math.random() * sum;
    for (let j in set) {
      pick -= set[j];
      if (pick <= 0) {
        return j;
      }
    }
  }

  return (
    <>
      <div className="card_bg">
        <div className="container py-5">
          <div className="row">
            {data.map((val, i) => {
              return (
                <div className="col-md-3">
                  <div className="card text-center">
                    <div className="card-body">
                      <h3 className="card-title">{val.title}</h3>
                      <h1>{val.cardNo}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <button className="btn" onClick={randomNumber}>
              Select
            </button>
          </div>
          {show == true ? (
            <div className="mt-5 d-flex justify-content-center">
              {data.map((res, key) => {
                return res.cardNo == random ? (
                  <div className="card text-center" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h3 className="card-title">{res.title}</h3>
                      <h1>{random} </h1>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
