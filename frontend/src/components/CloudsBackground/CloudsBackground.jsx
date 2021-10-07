import React from "react";

const CloudsBackground = ({ children }) => {
  return (
    <div className="clouds">
      {children}
      <div className="clouds__item clouds__item_circle" />
      <div className="clouds__item clouds__item_1" />
      <div className="clouds__item clouds__item_2" />
      <div className="clouds__item clouds__item_3" />
      <div className="clouds__item clouds__item_4" />
      <div className="clouds__item clouds__item_5" />
      <div className="clouds__item clouds__item_6" />
    </div>
  );
};

export default CloudsBackground;
