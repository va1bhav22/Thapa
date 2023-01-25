import React, { useEffect } from "react";
import { useState } from "react";
import "./Practice.css";
import axios from "axios";
const Practice = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  function dataFech() {
    setLoading(true);
    // setTimeout(() => {
      axios
        .get("http://localhost:8080/posts")
        .then((r) => {
          setLoading(false);
          setData(r.data);
        })
        .catch((e) => console.log(e));
    // }, 3000);
  }
  useEffect(() => {
    dataFech();
  }, []);
  return <div>
    {
      loading ? ( <div>Loading/........</div> ) :(
        <div>
        <h2
        style={{
          backgroundColor: count > 6 ? "lime" : "salmon",
          color: count > 6 ? "white" : "powderblue",
        }}
      >
        Count: {count}
      </h2>

      <h2
        style={
          count > 6
            ? { backgroundColor: "pink", color: "white" }
            : { backgroundColor: "salmon", color: "powderblue" }
        }
      >
        Count: {count}
      </h2>
      <h2>bsahshbdsdbsjdbjs</h2>

      <button onClick={() => setCount((current) => current + 1)}>
        Increment
      </button>

      <div>
        {data.map((ele) => {
          return (
           <div>
          
                <div
                className="disp"
                style={
                  ele.display === false
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                {/* {ele.display===true ? </div> : null} */}
                <div>
                  <img src={ele.img} alt="" />{" "}
                </div>
              </div>
              
            
           </div>
          );
        })}
      </div>
      </div>
      )
    }
  </div>;
};

export default Practice;
