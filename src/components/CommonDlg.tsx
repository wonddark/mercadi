import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React from "react";

interface Props {
  isOpen: boolean;
  toggle: () => void;
  size?: string;
  title: string;
  icon?: React.ReactElement;
  titleColor?: string;
  content: React.ReactElement | string;
  cancelLabel?: string;
  cancelIcon?: React.ReactElement;
  cancelFunction?: () => void;
  acceptLabel?: string;
  acceptIcon?: React.ReactElement;
}
function CommonDlg({
  isOpen,
  toggle,
  size,
  title,
  icon,
  titleColor,
  content,
  cancelLabel,
  cancelIcon,
  cancelFunction,
  acceptLabel,
  acceptIcon,
}: Props) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size={size ?? "md"} fade centered>
      <ModalHeader className={`text-${titleColor ?? "body"}`}>
        {icon ?? <i className="bi bi-info-circle-fill me-2" />}
        {title}
      </ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button color="light" onClick={cancelFunction ?? toggle}>
          {cancelIcon ?? <i className="bi bi-x-circle me-2" />}
          {cancelLabel ?? "Cancelar"}
        </Button>
        {acceptLabel && (
          <Button color="primary">
            {acceptIcon ?? <i className="bi bi-check-circle me-2" />}
            {acceptLabel}
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}

export default CommonDlg;
