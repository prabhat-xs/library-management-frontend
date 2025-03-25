import React from "react";

function RequestItem(req) {
  const { ReqID, ReaderID, Type } = req;
  return (
    <div>
      {ReqID}
      {ReaderID}
      {Type}
    </div>
  );
}

export default RequestItem;
