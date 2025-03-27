const RequestItem = ({ request, role }) => {
  const handleAccept = () => {
    console.log(`Accepted request ${request.id}`);
  };

  const handleReject = () => {
    console.log(`Rejected request ${request.id}`);
  };

  return (
    <tr>
      <td>{request.bookTitle}</td>
      <td>{request.userName}</td>
      <td>{request.status}</td>
      {role !== "reader" && (
        <td>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleReject}>Reject</button>
        </td>
      )}
    </tr>
  );
};

export default RequestItem;
