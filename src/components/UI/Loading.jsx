import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

const Loading = () => {
  const overlays = document.getElementById("overlays");
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <div className="spinner">
        <div></div>
        <div></div>
      </div>
    </>,

    overlays,
  );
};

export default Loading;
