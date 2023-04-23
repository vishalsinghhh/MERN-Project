import React, { useState } from "react";
// AiOutlineClose
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (route) => {
    setOpenModal(true);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://oruphones.onrender.com/api/v1/allRouter/${route}`
      );
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const triggerModal = () => {
    setOpenModal(false);
    setData();
  };

  console.log(data);

  return (
    <div className="Hero">
      {openModal && (
        <div className="modal">
          <p className="Details">
            {loading ? (
              <p className="loading">Loading...</p>
            ) : (
              <p className="loading">All Details</p>
            )}
          </p>
          <button onClick={() => triggerModal()}>
            <AiOutlineClose />
          </button>

          <div className="modal1">
            {data?.map((_, index) => {
              return (
                <div className="modalContent">
                  <p>{index + 1}</p>
                  <div className="modalContentMain">
                    {data[index].first_name && (
                      <div>
                        {data[index].first_name} {data[index].last_name}
                        <div>{data[index].email}</div>
                      </div>
                    )}
                    {data[index].averageIncome ? (
                      <div>Avg Income : ${data[index].averageIncome}</div>
                    ) : (
                      <div>Income : ${data[index].income}</div>
                    )}
                    {data[index].first_name && (
                      <div>
                        <div>Car : {data[index].car}</div>
                        <div>Quote : {data[index].quote}</div>
                      </div>
                    )}
                    <div>City : {data[index].city}</div>
                    {data[index].count && <div>No. of Users : {data[index].count}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="buttons">
        <div className="button1">
          <div>
            <button>
              <div className="viewDiv">
                <p className="view" onClick={() => onSubmit("router1")}>
                  View
                </p>
                Users which have income lower than $5 USD and have a car of
                brand “BMW” or “Mercedes”
              </div>
            </button>
          </div>
          <div>
            <button>
              <div className="viewDiv">
                <p className="view" onClick={() => onSubmit("router2")}>
                  View
                </p>
                Male Users which have phone price greater than 10,000
              </div>
            </button>
          </div>
        </div>
        <div className="button1">
          <div>
            <button>
              <div className="viewDiv">
                <p className="view" onClick={() => onSubmit("router3")}>
                  View
                </p>
                Users whose last name starts with “M” and has a quote character
                length greater than 15 and email includes his/her last name
              </div>
            </button>
          </div>
          <div>
            <button>
              <div className="viewDiv">
                <p className="view" onClick={() => onSubmit("router4")}>
                  View
                </p>
                Users which have a car of brand “BMW”, “Mercedes” or “Audi” and
                whose email does not include any digit
              </div>
            </button>
          </div>
        </div>

        <div>
          <button>
            <div className="viewDiv">
              <p className="view" onClick={() => onSubmit("router5")}>
                View
              </p>
              Show the data of top 10 cities which have the highest number of
              users and their average income
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
