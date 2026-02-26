const Dashboard = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row g-4">

        <div className="col-md-3 col-sm-6">
          <div className="finance-card">
            <h6>Total Revenue</h6>
            <h3>₹ 1,25,000</h3>
            <p className="text-success">+12% this month</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="finance-card">
            <h6>Total Expenses</h6>
            <h3>₹ 45,000</h3>
            <p className="text-danger">-5% this month</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="finance-card">
            <h6>Total Profit</h6>
            <h3>₹ 80,000</h3>
            <p className="text-success">+8% this month</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="finance-card">
            <h6>Investments</h6>
            <h3>₹ 60,000</h3>
            <p className="text-warning">Stable Growth</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;