import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

/* Component Import */
import Section from "./Section";
import Skills from "./Skills";
import Projects from "./Projects";
import Other from "./Other";

const Modal = ({ position, showModal, close }) => {
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            key={"modal-container"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-container"
          >
            <div>
              {position == "down" && (
                <>
                  <div className="mobile-bottom-close">
                    <button class="close-button" onClick={close}>
                      <FaChevronDown />
                    </button>
                  </div>
                  <motion.div
                    initial={{ y: 1000 }}
                    animate={{ y: 20 }}
                    exit={{ y: 500 }}
                    transition={{ type: "spring", stiffness: 400, damping: 50 }}
                    className="bottom-modal-wrapper"
                  >
                    <div className="bottom-close">
                      <button class="close-button" onClick={close}>
                        <FaChevronDown />
                      </button>
                    </div>
                    <div className="section-container">
                      <Projects />
                      <Other />
                    </div>
                  </motion.div>
                </>
              )}
            </div>
            <div>
              {position == "up" && (
                <>
                  <motion.div
                    initial={{ y: -1000 }}
                    animate={{ y: -20 }}
                    exit={{ y: -500 }}
                    transition={{ type: "spring", stiffness: 400, damping: 50 }}
                    className="top-modal-wrapper"
                  >
                    <div className="section-container">
                      <Section title="About me" description="about" />
                      <Section title="My Experience" description="experience" />
                      <Skills />
                    </div>
                    <div className="top-close">
                      <button class="close-button" onClick={close}>
                        <FaChevronUp />
                      </button>
                    </div>
                  </motion.div>
                  <div className="mobile-top-close">
                    <button class="close-button" onClick={close}>
                      <FaChevronUp />
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
