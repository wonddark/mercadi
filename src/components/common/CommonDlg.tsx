import { Modal } from "reactstrap";
import React from "react";

interface Props {
  isOpen: boolean;
  toggle: () => void;
  size?: string;
  title: string;
  icon?: React.ReactElement;
  content: React.ReactElement | string;
  cancelLabel?: string;
  cancelIcon?: React.ReactElement;
  cancelFunction?: () => void;
  acceptLabel?: string;
  acceptIcon?: React.ReactElement;
  acceptFunction?: () => void;
  acceptDisabled?: boolean;
}
function CommonDlg({
  isOpen,
  toggle,
  size,
  title,
  icon,
  content,
  cancelLabel,
  cancelIcon,
  cancelFunction,
  acceptLabel,
  acceptIcon,
  acceptFunction,
  acceptDisabled,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size={size ?? "md"}
      fade
      centered
      scrollable
    >
      <div className="modal-header">
        <h5 className="modal-title">
          {icon ?? <i className="bi bi-info-circle-fill me-2" />}
          {title}
        </h5>
        <button className="btn btn-close" onClick={toggle} />
      </div>
      <div className="modal-body">{content}</div>
      <div className="modal-footer">
        <button className="btn btn-cancel" onClick={cancelFunction ?? toggle}>
          {cancelIcon ?? <i className="bi bi-x-circle me-2" />}
          {cancelLabel ?? "Cancelar"}
        </button>
        {acceptLabel && (
          <button
            className="btn btn-primary"
            onClick={acceptFunction ?? undefined}
            disabled={acceptDisabled}
          >
            {acceptIcon ?? <i className="bi bi-check-circle me-2" />}
            {acceptLabel}
          </button>
        )}
      </div>
    </Modal>
  );
}

export default CommonDlg;
