import React, { useEffect, useMemo, useState, useContext, useRef } from "react";

// import {
import { Card, Button, Dropdown } from "react-bootstrap";

//TableContainer
import TableContainer from "@common/TableContainer";
import { recentOrders } from "@common/data";
import Link from "next/link";
import Image from "next/image";
import { hostAPI } from "pages/api/host-api";
import {
  setPlayers,
  // GameStoreContext,
} from "Components/slices/dashboard/reducer";

// const CustomToggle = React.forwardRef(
//   (onClick: any, ref: React.Ref<HTMLAnchorElement>) => (
//     <Link
//       href="#"
//       ref={ref}
//       className="text-reset dropdown-btn"
//     >
//       <span className="fw-semibold text-uppercase fs-12">Sort by:</span>
//       <span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1"></i></span>
//     </Link>
//   )
// );

const ScoreTable = () => {
  useEffect(() => {
    hostAPI
      .getPlayers()
      .then((res) => {
        setPlayers(res.players);
        console.log(res.players);
      })
      .catch((err) => alert(err));
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "Ranking",
        accessor: "ranking",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Player",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (
            <>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                  <Image
                    src={cellProps.productImage.src}
                    width="32"
                    height={32}
                    alt=""
                    className="avatar-xs rounded-circle"
                  />
                </div>
                <div className="flex-grow-1">{cellProps.productName}</div>
              </div>
            </>
          );
        },
      },
      {
        Header: "Score",
        accessor: "amount",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "MANUAL ADJUST",
        accessor: () => {
          return (
            <>
              <div className="d-flex align-items-center">
                <Button variant="outline-info" size="sm">
                  <i className="ri-add-fill"></i>
                </Button>
                <Button variant="outline-danger ms-2" className="ms-1" size="sm">
                  <i className="ri-subtract-line"></i>
                </Button>
              </div>
            </>
          );
        },
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Control",
        accessor: () => {
          return (
            <>
              <div className="d-flex align-items-center">
                {/* <Button variant="secondary ms-">
                  <i className="ri-edit-2-line"></i>
                </Button>
                <Button variant="info" className="ms-1">
                  <i className="ri-delete-bin-6-line"></i>
                </Button> */}
                <Link className="link-primary fs-20" href="#"><i className="ri-edit-2-line"></i></Link>
                <Link className="link-danger fs-20 ms-2" href="#"><i className="ri-delete-bin-line"></i></Link>
              </div>
            </>
          );
        },
        disableFilters: true,
        filterable: true,
      },
      // {
      //   Header: "Status",
      //   disableFilters: true,
      //   filterable: true,
      //   accessor: (cellProps: any) => {
      //     switch (cellProps.status) {
      //       case "Paid":
      //         return (
      //           <span className="badge text-success bg-success-subtle">
      //             {" "}
      //             {cellProps.status}
      //           </span>
      //         );
      //       case "Unpaid":
      //         return (
      //           <span className="badge badge-soft-danger">
      //             {" "}
      //             {cellProps.status}
      //           </span>
      //         );
      //       case "Pending":
      //         return (
      //           <span className="badge badge-soft-warning">
      //             {" "}
      //             {cellProps.status}
      //           </span>
      //         );
      //       default:
      //         return (
      //           <span className="badge text-success bg-success-subtle">
      //             {" "}
      //             {cellProps.status}
      //           </span>
      //         );
      //     }
      //   },
      // },
    ],
    []
  );

  return (
    <React.Fragment>
      <Card>
        <Card.Header className="align-items-center d-flex mb-n2 justify-content-between flex-grow-1">
          <div className="flex-shrink-0">
            <Dropdown className="card-header-dropdown">
              <Dropdown.Toggle
                variant="link-dark"
                className="text-reset dropdown-btn arrow-none p-0"
              >
                {/* as={CustomToggle} */}
                <span className="fw-semibold text-uppercase fs-12">
                  Sort by:
                </span>
                <span className="text-muted">
                  {" "}
                  Today<i className="mdi mdi-chevron-down ms-1"></i>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#">Today</Dropdown.Item>
                <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                <Dropdown.Item href="#">This Month</Dropdown.Item>
                <Dropdown.Item href="#">Last Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Button variant="outline-primary">Manual Adjust</Button>
        </Card.Header>

        {/* <Card.Body> */}
        <TableContainer
          columns={columns || []}
          data={recentOrders || []}
          isGlobalFilter={false}
          iscustomPageSize={false}
          isBordered={false}
          customPageSize={5}
          tableClass="table-centered align-middle table-nowrap mb-0 my-1"
          theadClass="bg-light text-light py-auto"
        />
        {/* </Card.Body> */}
        {/* <button className="Btn bg-primary-2 player-link-btn">
          <div className="sign">
            <i className="bi bi-people label-icon align-middle fs-22"></i>{" "}
          </div>
          <div className="text d-flex justify-content-center fs-22">PlayerLink</div>
        </button> */}

        <div className="btn-player-link d-none d-md-block">
          <div
            className="btn-rounded shadow-lg btn btn-icon btn-lg p-2 btn-outline-primary btn-player-link-short"
          >
            <i className="mdi mdi-link fs-22"></i>
          </div>
          <Button variant="outline-primary" className="btn-player-link-long btn-lg rounded-pill fs-16">Player Link</Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default ScoreTable;
