function SuccessMessage({ success }) {
    return (
        success && (
            <div className="alert alert-success m-2">Submission Recieved!</div>
        )
    );
}

export default SuccessMessage;