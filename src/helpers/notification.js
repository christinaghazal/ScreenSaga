import { toast } from "react-toastify";

export function notification(status, msg) {
  toast[status](msg, {
    position: "top-center",
    autoClose: 2000,
    theme: "light",
  });
}
