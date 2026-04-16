import "./MobileModal.scss";

import { motion } from "motion/react";

import CrossIcon from "~/assets/icons/cross.svg?react";
import Menu from "../Menu/Menu";
import Soc1als from "../Soc1als/Soc1als";
import Link from "../Link/Link";

import { useRouteLoaderData } from "react-router";
import type { loader as rootLoader } from "~/root";

import { formatPhone } from "~/formatters/formatPhone";

interface MobileModalProps {
  closeModal: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: 24,
    transition: {
      duration: 0.25,
    },
  },
} as const;

const MobileModal = ({ closeModal }: MobileModalProps) => {
  const rootData = useRouteLoaderData<typeof rootLoader>("root");

  if (!rootData) return null;

  const { info } = rootData;

  return (
    <motion.div
      className="mobile-modal"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.18 }}
    >
      <motion.div className="mobile-modal__inner" variants={panelVariants}>
        <header className="mobile-modal__header">
          <button
            type="button"
            className="mobile-modal__close-button"
            onClick={closeModal}
            aria-label="Закрыть меню"
          >
            <CrossIcon />
          </button>
        </header>

        <div className="mobile-modal__body">
          <Menu className="mobile-modal__menu" isModalMenu />

          <div className="mobile-modal__contacts">
            <Link
              className="mobile-modal__link"
              href={`tel:${formatPhone(info.contacts.phone)}`}
              variant="transparent"
            >
              {info.contacts.phone}
            </Link>

            <a
              href={`mailto:${info.contacts.email}`}
              className="mobile-modal__email"
            >
              {info.contacts.email}
            </a>

            <Soc1als className="mobile-modal__soc1als" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileModal;
