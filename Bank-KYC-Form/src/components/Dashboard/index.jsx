import Header from "./Header";
import Form from "./KycForm/Form";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full dashboard font-primary">
      <Header />
      <Form />
    </div>
  );
};

export default Dashboard;
