import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import { db } from "../../firebase";

import "./styles.scss";

import Swal from "sweetalert2";

import axios from "axios";
import cogoToast from "cogo-toast";
import ReactApexChart from "react-apexcharts";
import Chart from "react-google-charts";

const Dashboard = () => {
  const [allUser, setAllUser] = React.useState([]);
  const [delCheck, setDelCheck] = React.useState(true);
  const [customUser, setCustomUsers] = React.useState([]);
  const [adminUser, setAdminUsers] = React.useState([]);
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);
  const [businessCount, setBusinessCounts] = React.useState(null);

  const businessCounts = [
    {
      icon: "bx bx-hotel",
      count: businessCount && businessCount?.hotels,
      title: "Total Hotels",
    },
    {
      icon: "bx bx-restaurant",
      count: businessCount && businessCount?.resturants,
      title: "Total Resturants",
    },
    {
      icon: "bx bx-moon",
      count: businessCount && businessCount?.hospitals,
      title: "Total Hospitals",
    },
    {
      icon: "bx bx-cart",
      count: businessCount && businessCount?.barbers,
      title: "Total Barbers",
    },
  ];

  React.useEffect(() => {
    axios
      .get("/api/businessCounts")
      .then(({ data }) => {
        setBusinessCounts(data);
      })
      .catch((err) => {
        cogoToast.error(err);
      });
  }, []);

  const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

  const renderCusomerBody = (item, index) => (
    <tr key={index}>
      <td>{item.username}</td>
      <td>{item.email}</td>
    </tr>
  );

  React.useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setAllUser(documents);
        documents.map((doc) => {
          if (doc.role === "admin") {
            setAdminUsers((prevUsers) => [
              ...prevUsers,
              { username: doc.name, email: doc.email },
            ]);
          } else {
            setCustomUsers((prevUsers) => [
              ...prevUsers,
              {
                uid: doc.uid,
                username: doc.name,
                email: doc.email,
                provider: doc.authProvider,
              },
            ]);
          }
        });
      });
  }, [delCheck]);

  const handleDeletion = (id, email) => {
    Swal.fire({
      title: `<strong>Do you want to delete email ${email} ?</strong>`,
      icon: "warning",

      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        db.collection("users")
          .doc(id)
          .delete()
          .then((res) => {
            console.log(res);
            axios.delete(`/api/deleteUser?userID=${email}`).then(() => {
              Swal.fire("Deleted!", "", "success");
              setAdminUsers([]);
              setCustomUsers([]);
              setDelCheck(!delCheck);
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const customUsers = {
    header: ["Provider", "Name", "Email", ""],
    body: customUser,
  };

  const adminUsers = {
    head: ["Name", "Email"],
    body: adminUser,
  };

  const barChart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Restaurants", "Hotels", "Hospitals", "Barbers"],
      },
      grid: {
        show: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: [
          businessCount && businessCount?.resturants,
          businessCount && businessCount?.hotels,
          businessCount && businessCount?.hospitals,
          businessCount && businessCount?.barbers,
        ],
      },
    ],
    legend: {
      position: "top",
    },
  };

  return (
    <div style={{ marginTop: "-20px" }}>
      <h2 className="page-header">Admin Panel</h2>
      <div className="row mx-auto w-100">
        <div className="col-12">
          <div className="row">
            {businessCounts.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row px-2 d-flex justify-content-center">
        <div className="col-6 ">
          <div className="card" style={{ height: "320px" }}>
            <Chart
              width={"500px"}
              height={"280px"}
              chartType="PieChart"
              data={[
                ["Task", "Hours per Day"],
                ["Restaurants", businessCount?.resturants],
                ["Hotels", businessCount?.hotels],
                ["Barbers", businessCount?.hospitals],
                ["Hospitals", businessCount?.barbers],
              ]}
              options={{
                // Just add this option
                is3D: true,
              }}
              rootProps={{ "data-testid": "2" }}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="card" style={{ height: "320px", paddingLeft: "7vw" }}>
            <ReactApexChart
              options={barChart?.options}
              series={barChart?.series}
              type="bar"
              width={400}
              height={270}
            />
          </div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Admin Users</h3>
            </div>
            <div className="card__body">
              <Table
                headData={adminUsers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={adminUser}
                renderBody={(item, index) => renderCusomerBody(item, index)}
                type={"admin"}
              />
            </div>
          </div>
        </div>
        <div className="col-8 ">
          <div className="card">
            <div className="card__header">
              <h3>Custom Users</h3>
            </div>
            <div className="card__body">
              <div className="table custom-user-table">
                <thead>
                  <tr>
                    {customUsers.header.map((head) => {
                      return (
                        <th className="w-50" scope="col">
                          {head}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {customUser &&
                    customUser.map(({ provider, username, email, uid }) => {
                      return (
                        <tr>
                          <td>{provider}</td>
                          <td>{username}</td>
                          <td>{email}</td>
                          <td className="mx-5 px-5 gx-5">
                            <button
                              className="p-1 px-2 del-button mx-5 gx-5"
                              onClick={() => handleDeletion(uid, email)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
