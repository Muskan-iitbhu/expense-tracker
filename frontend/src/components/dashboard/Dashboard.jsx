import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext.jsx";
import History from "../../history/history.jsx";
import Chart from "../chart/Chart.jsx";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []); //When component loads, it fetches incomes and expenses data.

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">All Transactions</h1>
      <div className="row g-3">
        {/* Chart and totals */}
        <div className="col-lg-8">
          <Chart />
          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <div className="bg-light border rounded-4 shadow-sm p-3 text-center">
                <h5>Total Income</h5>
                <p className="fs-4 fw-bold text-success">₹{totalIncome()}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light border rounded-4 shadow-sm p-3 text-center">
                <h5>Total Expense</h5>
                <p className="fs-4 fw-bold text-danger">₹{totalExpenses()}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light border rounded-4 shadow-sm p-3 text-center">
                <h5>Total Balance</h5>
                <p className="fs-4 fw-bold text-primary">₹{totalBalance()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* History and min/max */}
        <div className="col-lg-4">
          <History />
          <h5 className="d-flex justify-content-between px-2 mt-5">
            <span>Min</span>
            <span className="fw-bold">Salary</span>
            <span>Max</span>
          </h5>
          <div className="bg-light border rounded-4 shadow-sm p-3 d-flex justify-content-between" style={{ height: '60px' }}>
            <p>₹{Math.min(...incomes.map((item) => item.amount)) || 0}</p>
            <p>₹{Math.max(...incomes.map((item) => item.amount)) || 0}</p>
          </div>

          <h5 className="d-flex justify-content-between px-2 mt-4" >
            <span>Min</span>
            <span className="fw-bold">Expense</span>
            <span>Max</span>
          </h5>
          <div className="bg-light border rounded-4 shadow-sm p-3 d-flex justify-content-between" style={{ height: '60px' }}>
            <p>₹{Math.min(...expenses.map((item) => item.amount)) || 0}</p>
            <p>₹{Math.max(...expenses.map((item) => item.amount)) || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
