import React, { useState } from "react";

// import Router from "next/router";
const Navdata = () => {
  //state data
  const [isAuth, setIsAuth] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  // Authentication
  //   const [isSignIn, setIsSignIn] = useState(false);
  //   const [isSignUp, setIsSignUp] = useState(false);
  //   const [isPasswordReset, setIsPasswordReset] = useState(false);
  //   const [isPasswordCreate, setIsPasswordCreate] = useState(false);
  //   const [isLockScreen, setIsLockScreen] = useState(false);
  //   const [isLogout, setIsLogout] = useState(false);
  //   const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  //   const [isVerification, setIsVerification] = useState(false);
  //   const [isError, setIsError] = useState(false);

  // Pages
  //   const [isProfile, setIsProfile] = useState(false);

  // Multi Level
  //   const [isLevel1, setIsLevel1] = useState(false);
  //   const [isLevel2, setIsLevel2] = useState(false);

  const [isCurrentState, setIsCurrentState] = useState("");

  function updateIconSidebar(e: any) {
    if (e && e.target && e.target.getAttribute("sub-items")) {
      const ul: any = document.getElementById("two-column-menu");
      const iconItems: any = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id: any = item.getAttribute("sub-items");
        var menusId = document.getElementById(id);
        if (menusId) {
          (menusId.parentElement as HTMLElement).classList.remove("show");
        }
      });
      e.target.classList.add("active");
    }
  }

  //   useEffect(() => {
  //     document.body.classList.remove("twocolumn-panel");
  //     if (isCurrentState !== "Auth") {
  //       setIsAuth(false);
  //     }
  //     if (isCurrentState !== "Pages") {
  //       setIsPages(false);
  //     }
  //     if (isCurrentState !== "MuliLevel") {
  //       setIsMultiLevel(false);
  //     }
  //     if (isCurrentState === "Dashboard") {
  //       Router.push("/dashboard");
  //       document.body.classList.add("twocolumn-panel");
  //     }
  //     if (isCurrentState === "Settings") {
  //       Router.push("/Settings");
  //       document.body.classList.add("twocolumn-panel");
  //     }
  //     if (isCurrentState === "Widgets") {
  //       Router.push("/widgets");
  //       document.body.classList.add("twocolumn-panel");
  //     }
  //     if (isCurrentState === "API Key") {
  //       Router.push("/api-key");
  //       document.body.classList.add("twocolumn-panel");
  //     }
  //     if (isCurrentState === "Contact") {
  //       Router.push("/contact");
  //       document.body.classList.add("twocolumn-panel");
  //     }
  //     if (isCurrentState === "Leaderboard") {
  //       Router.push("/leaderboard");
  //       document.body.classList.add("twocolumn-panel");
  //     }
  //     if (isCurrentState === "Components") {
  //       Router.push("https://HiroRat-nextjs-components.vercel.app/");
  //       document.body.classList.add("twocolumn-panel");
  //     }
  //   }, [isCurrentState, isAuth, isPages, isMultiLevel]);

  const menuItems: any = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "bi bi-speedometer2",
      link: "/dashboard",
      click: function (e: any) {
        e.preventDefault();
        setIsCurrentState("Dashboard");
      },
    },
    {
      label: "Pages",
      isHeader: true,
    },
    // {
    //     id: "authentication",
    //     label: "Authentication",
    //     icon: "bi bi-person-circle",
    //     link: "/#",
    //     click: function (e: any) {
    //         e.preventDefault();
    //         setIsAuth(!isAuth);
    //         setIsCurrentState('Auth');
    //         updateIconSidebar(e);
    //     },
    //     stateVariables: isAuth,
    //     subItems: [
    //         {
    //             id: "signIn",
    //             label: "Sign In",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsSignIn(!isSignIn);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isSignIn,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "#" },
    //                 { id: 2, label: "Basic 2", link: "#" },
    //                 { id: 3, label: "Cover", link: "#" },
    //             ]
    //         },
    //         {
    //             id: "signUp",
    //             label: "Sign Up",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsSignUp(!isSignUp);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isSignUp,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "#" },
    //                 { id: 2, label: "Basic 2", link: "#" },
    //                 { id: 3, label: "Cover", link: "#" },
    //             ]
    //         },
    //         {
    //             id: "passwordReset",
    //             label: "Password Reset",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsPasswordReset(!isPasswordReset);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isPasswordReset,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "#" },
    //                 { id: 2, label: "Basic 2", link: "#" },
    //                 { id: 3, label: "Cover", link: "#" },
    //             ]
    //         },
    //         {
    //             id: "passwordCreate",
    //             label: "Password Create",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsPasswordCreate(!isPasswordCreate);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isPasswordCreate,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "#" },
    //                 { id: 2, label: "Basic 2", link: "#" },
    //                 { id: 3, label: "Cover", link: "#" },
    //             ]
    //         },
    //         {
    //             id: "lockScreen",
    //             label: "Lock Screen",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsLockScreen(!isLockScreen);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isLockScreen,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "#" },
    //                 { id: 2, label: "Basic 2", link: "#" },
    //                 { id: 3, label: "Cover", link: "#" },
    //             ]
    //         },
    //         {
    //             id: "logout",
    //             label: "Logout",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsLogout(!isLogout);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isLogout,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "#" },
    //                 { id: 2, label: "Basic 2", link: "#" },
    //                 { id: 3, label: "Cover", link: "#" },
    //             ]
    //         },
    //         {
    //             id: "successMessage",
    //             label: "Success Message",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsSuccessMessage(!isSuccessMessage);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isSuccessMessage,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "#" },
    //                 { id: 2, label: "Basic 2", link: "#" },
    //                 { id: 3, label: "Cover", link: "#" },
    //             ]
    //         },
    //         {
    //             id: "twoStepVerification",
    //             label: "Two Step Verification",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsVerification(!isVerification);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isVerification,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "#" },
    //                 { id: 2, label: "Basic 2", link: "#" },
    //                 { id: 3, label: "Cover", link: "#" },
    //             ]
    //         },
    //         {
    //             id: "errors",
    //             label: "Errors",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e: any) {
    //                 e.preventDefault();
    //                 setIsError(!isError);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isError,
    //             childItems: [
    //                 { id: 1, label: "404 Basic", link: "#" },
    //                 { id: 2, label: "404 Cover", link: "#" },
    //                 { id: 3, label: "404 Alt", link: "#" },
    //                 { id: 4, label: "500", link: "#" },
    //                 { id: 5, label: "Offline Page", link: "#" },
    //             ]
    //         },
    //     ],
    // },
    {
      id: "settings",
      label: "Settings",
      icon: "bi bi-gear",
      link: "/settings",
      click: function (e: any) {
        e.preventDefault();
        setIsCurrentState("Settings");
      },
    },
    {
      id: "guide",
      label: "Guide",
      icon: "bi bi-file-text",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsCurrentState("Guide");
      },
    },
    {
      id: "options",
      label: "Options",
      icon: "bi bi-option",
      click: function (e: any) {
        e.preventDefault();
        setIsPages(!isPages);
        setIsCurrentState("Pages");
        updateIconSidebar(e);
      },
      stateVariables: isPages,
      subItems: [
        {
          id: "add_image",
          label: "Add Image",
          link: "/addImage",
          parentId: "options",
        },
        {
          id: "pre_entered_question",
          label: "Pre-Entered Question",
          link: "/preEnteredQuestion",
          parentId: "options",
        },
        {
          id: "trophy_case",
          label: "Trophy Case",
          link: "#",
          parentId: "options",
        },
        {
          id: "change_roomcode",
          label: "Change RoomCode",
          link: "#",
          parentId: "options",
        },
        {
          id: "view_row_data",
          label: "View Row Data",
          link: "/viewRowData",
          parentId: "options",
        },
        {
          id: "view_round-snapshot",
          label: "View Round Snapshot",
          link: "/viewRoundSnapshot",
          parentId: "options",
        },
      ],
    },
    {
      id: "my_qr_code",
      label: "My QR Code",
      icon: "bi bi-qr-code",
      link: "/myQRcode",
      click: function (e: any) {
        e.preventDefault();
        setIsCurrentState("My QR Code");
      },
    },
    {
      id: "premium_upgrade",
      label: "Premium Upgrade",
      icon: "bi bi-currency-dollar",
      isBlankLink: true,
      link: "/premium",
      click: function (e: any) {
        e.preventDefault();
        setIsCurrentState("Premium Upgrade");
      },
    },
    {
      id: "log_out",
      label: "Log Out",
      icon: "mdi mdi-logout",
      link: "/auth/login",
      click: function (e: any) {
        e.preventDefault();
        setIsCurrentState("Log Out");
      },
    },
    {
      id: "link_trivia",
      label: "HiroRat.com/PRZM",
      icon: "bi bi-link-45deg",
      isBlankLink: true,
      link: "#",
      click: function (e: any) {
        e.preventDefault();
        setIsCurrentState("HiroRat.com/PRZM");
      },
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
