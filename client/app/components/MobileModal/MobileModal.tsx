import "./MobileModal.scss";

import CrossIcon from "~/assets/icons/cross.svg?react";
import Menu from "../Menu/Menu";
import Soc1als from "../Soc1als/Soc1als";
import Button from "../Button/Button";

interface MobileModalProps {
  closeModal: () => void;
}

const MobileModal = ({ closeModal }: MobileModalProps) => {
  return (
    <div className="mobile-modal">
      <div className="mobile-modal__inner">
        <header className="mobile-modal__header">
          <button
            type="button"
            className="mobile-modal__close-button"
            onClick={closeModal}
          >
            <CrossIcon />
          </button>
        </header>

        <div className="mobile-modal__body">
          <Menu className="mobile-modal__menu" isModalMenu />

          <div className="mobile-modal__contacts">
            <Button
              isPhoneButton
              className="mobile-modal__link"
              href="+73422737107"
            >
              +7 (342) 27-37-107
            </Button>
            <a
              href="mailto:godetailing@mail.com"
              className="mobile-modal__email"
            >
              godetailing@mail.com
            </a>
            <Soc1als className="mobile-modal__soc1als" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
