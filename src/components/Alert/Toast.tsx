import * as React from "react";
import { removeToastBody } from "./Alert";
export interface IToast {
  type: string;
  title: string;
  message: string;
  confirm?: boolean;
}
const Toast = (props: IToast) => {
  const { type, title, message, confirm } = props;

  const getIcon = (t: string) => {
    let r: string = "";
    switch (t) {
      case "success":
        r = "check-circle";
        break;
      case "danger":
        r = "exclamation-circle";
        break;
      case "info":
        r = "info-circle";
        break;
      case "warning":
        r = "exclamation-circle";
        break;
      default:
        r = "check";
        break;
    }
    return r;
  };
  return (
    <div
      className={`dashboard_toast--box ${
        confirm
          ? "--confirm-toast"
          : "toast-with-animation anim-toast-auto-hidden"
      }`}
      role="dialog"
      aria-hidden="true"
      id="output_2"
    >
      <div className={`dashboard_toast--wrap --${type} ${confirm ? "" : ""}`}>
        <div>
          <span className={`fas fa-${getIcon(type)}`}></span>
        </div>
        <div>
          <div>
            <h1>{title}</h1>
            <div className="dashboard_toast-body">
              <p>{message}</p>
            </div>
          </div>
          {confirm ? (
            <div>
              <button type="button" onClick={() => removeToastBody()}>
                Aceptar
              </button>
            </div>
          ) : null}
        </div>
        <div>
          <button type="button" onClick={() => removeToastBody()}>
            <span className="fas fa-times"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
