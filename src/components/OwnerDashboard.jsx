import { useState } from "react";
import BookList from "./BookList";
import UserList from "./UserList";
import RequestList from "./RequestList";

const OwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("books");

  return (
    <div className="dashboard">
      <h2>Owner Dashboard</h2>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("books")}
          className={activeTab === "books" ? "active" : ""}
        >
          Books
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={activeTab === "users" ? "active" : ""}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("requests")}
          className={activeTab === "requests" ? "active" : ""}
        >
          Requests
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "books" && <BookList role={"owner"} />}
        {activeTab === "users" && <UserList />}
        {activeTab === "requests" && <RequestList />}
      </div>
    </div>
  );
};

export default OwnerDashboard;
