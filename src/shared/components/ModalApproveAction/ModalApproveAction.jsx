const ModalApproveAction = ({ children, ModalApproveAction }) => {
  const handleApproveClick = () => {
    ModalApproveAction();
    closeModal();
  };

  return (
    <>
      <div className="modal-content">
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={handleApproveClick}>Yes</button>
        </div>
      </div>
    </>
  );
};

export default ModalApproveAction;
