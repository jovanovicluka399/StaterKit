import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import SimpleBar from "simplebar-react";

import VerticalLayout from "./VerticalLayout";
import HorizontalLayout from "./HorizontalLayout";
import GoPremiumModal from "../../Modals/GoPremiumModal";

import logosm from "../../assets/images/logo-sm.png";
import logodark from "../../assets/images/logo-dark.webp";
import logolight from "../../assets/images/logo-light.webp";

interface SidebarProps {
  layoutType: any;
}

const Sidebar = ({ layoutType }: SidebarProps) => {
  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (
      document.documentElement.getAttribute("data-sidebar-size") === "sm-hover"
    ) {
      document.documentElement.setAttribute(
        "data-sidebar-size",
        "sm-hover-active"
      );
    } else if (
      document.documentElement.getAttribute("data-sidebar-size") ===
      "sm-hover-active"
    ) {
      document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
    } else {
      document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
    }
  };

  const [showGoPremiumModal, setGoPremiumModal] = useState(false);

  return (
    <React.Fragment>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <Link href="/" className="logo logo-dark">
            <span className="logo-sm">
              <Image src={logosm} alt="" height="26" />
            </span>
            <span className="logo-lg">
              <Image src={logodark} alt="" height="26" priority={true} />
            </span>
          </Link>

          <Link href="/" className="logo logo-light">
            <span className="logo-sm">
              <Image src={logosm} alt="" height="26" />
            </span>
            <span className="logo-lg">
              <Image src={logolight} alt="" height="26" />
            </span>
          </Link>
          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line" />
          </button>
        </div>

        {layoutType === "horizontal" ? (
          <div id="scrollbar">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <HorizontalLayout />
              </ul>
            </Container>
          </div>
        ) : (
          <React.Fragment>
            <SimpleBar id="scrollbar" className="h-100">
              <Container fluid>
                <div id="two-column-menu"></div>
                <ul className="navbar-nav" id="navbar-nav">
                  <VerticalLayout layoutType={layoutType} />
                </ul>
              </Container>
            </SimpleBar>
            <div className="sidebar-background"></div>
          </React.Fragment>
        )}
      </div>
      <div className="vertical-overlay"></div>
      <GoPremiumModal
        show={showGoPremiumModal}
        handleClose={() => setGoPremiumModal(false)}
      >
        Sorry you must have a premium account to start automatic round!
      </GoPremiumModal>
    </React.Fragment>
  );
};

export default Sidebar;
