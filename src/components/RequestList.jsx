import { useState, useEffect } from "react";
import { fetchRequests } from "../services/api";
import RequestItem from "./RequestItem";
import toast from "react-hot-toast";

const RequestList = ({ role }) => {
  const [requests, setRequests] = useState([]);
  let hasReq = false;
  useEffect(() => {
    const loadRequests = async () => {
      const data = await fetchRequests(role);
      toast.success("Success");
      setRequests(data.requests);
      if (Array.isArray(requests) && requests.length > 0) {
        hasReq = true;
      }
    };
    loadRequests();
  }, []);

  return (
    <div className="request-list">
      <h2>Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>User</th>
            <th>Status</th>
            {role !== "reader" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {hasReq &&
            requests.map((request) => (
              <RequestItem key={request.id} request={request} role={role} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
