import React from "react";

async function RequestList() {
  const [reqs, setReq] = useState(null);
  try {
    const res = await axios.get("url");
    setReq(res.user);
  } catch (error) {}

  return (
    <div>
      UserList
      {reqs.map((req) => {
        <RequestItemItem key={req.id} user={req} />;
      })}
    </div>
  );
}

export default RequestList;
