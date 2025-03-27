import { useState } from "react";
import BookList from "./BookList";
// import IssuedBooks from "./IssuedBooks";
import RequestList from "./RequestList";

const ReaderDashboard = () => {
  const [activeTab, setActiveTab] = useState("books");

  return (
    <div className="dashboard">
      <h2>Reader Dashboard</h2>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("books")}
          className={activeTab === "books" ? "active" : ""}
        >
          Books
        </button>
        <button
          onClick={() => setActiveTab("issued")}
          className={activeTab === "issued" ? "active" : ""}
        >
          Issued Books
        </button>
        <button
          onClick={() => setActiveTab("requests")}
          className={activeTab === "requests" ? "active" : ""}
        >
          Requests
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "books" && <BookList role={"reader"} />}
        {/* {activeTab === "issued" && <IssuedBooks role={"reader"} />} */}
        {activeTab === "requests" && <RequestList role={"reader"} />}
      </div>
    </div>
  );
};

export default ReaderDashboard;
