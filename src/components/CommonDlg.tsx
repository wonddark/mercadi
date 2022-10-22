import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
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
        <Button close onClick={toggle} />
      </div>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button color="light" onClick={cancelFunction ?? toggle}>
          {cancelIcon ?? <i className="bi bi-x-circle me-2" />}
          {cancelLabel ?? "Cancelar"}
        </Button>
        {acceptLabel && (
          <Button
            color="primary"
            onClick={acceptFunction ?? undefined}
            disabled={acceptDisabled}
          >
            {acceptIcon ?? <i className="bi bi-check-circle me-2" />}
            {acceptLabel}
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}

export default CommonDlg;
