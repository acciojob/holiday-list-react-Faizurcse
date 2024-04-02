import React from "react";
function OrderredList({ indiacity }) {
  return (
    <>
      <ol>
        {indiacity.map((city, index) => (
          <li key={index}>
            {city.name} : {city.country}
          </li>
        ))}
      </ol>
    </>
  );
}
export default OrderredList;
