import UserRegister from "../../components/user/userRegister";
import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";
import Slidebar from "../../layout/Slidebar/Slidebar";
import "../index.css";

const UserRegisterPage = () => {
  return (
    <main>
      <Navbar />
      <div className="content">
        {" "}
        <Slidebar />
        <UserRegister></UserRegister>
      </div>
      <Footer />
    </main>
  );
};

export default UserRegisterPage;
