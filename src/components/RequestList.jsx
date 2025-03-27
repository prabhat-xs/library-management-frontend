import { useState, useEffect } from "react";
import { fetchRequests } from "../services/api";
import RequestItem from "./RequestItem";

const RequestList = ({ role }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const loadRequests = async () => {
      const data = await fetchRequests();
      setRequests(data);
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
          {requests.map((request) => (
            <RequestItem key={request.id} request={request} role={role} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
