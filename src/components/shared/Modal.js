function Modal({ style }) {
  return (
    <div className="alert alert-success shadow-lg mt-3 mb-3" style={style}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          Your Education has been added, please check out the preview section
        </span>
      </div>
    </div>
  );
}

export default Modal;
