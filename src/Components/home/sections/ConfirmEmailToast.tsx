import { ToastProp } from "../../../Models";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";

function ConfirmEmailToast({ text, canShow, error }: ToastProp) {
  return (
    <section
      className={`toast ${
        canShow ? `slide-in ${error ? "error" : "confirm"}` : ""
      }`}
    >
      {!error ? (
        <AiFillCheckCircle className={"icon"} />
      ) : (
        <AiOutlineClose className={"icon"} />
      )}
      <p>{text}</p>
    </section>
  );
}

export default ConfirmEmailToast;
