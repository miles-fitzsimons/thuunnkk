import React from "react";

import "./List.scss";

const List = ({ items }) => (
  <ul className="list">
    {items.map((item, i) => (
      <li className="item" key={i}>
        {item.message}
      </li>
    ))}
  </ul>
);

export default List;
