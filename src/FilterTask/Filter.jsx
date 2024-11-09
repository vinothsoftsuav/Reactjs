import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Useeffect from "../Hooks/useeffect";
import axios from "axios";
import { FaGreaterThan } from "react-icons/fa";
import Popup from "./Popup";

export default function Filter() {
  const [membersList, setMemberlist] = useState([]);
  const [popup, setpopup] = useState(false);
  const [datas,setdatas] = useState([{}])

  useEffect(() => {
    console.log("filter component loaded");
    axios
      .get("https://dummyjson.com/users")
      .then((datas) => {
        setMemberlist(datas.data.users);
      })
      .catch((e) => {
        console.log("e" + e);
      });
    console.log(membersList);
  }, []);

  function handlePopup(e) {
    setdatas({["Name"]:e.firstName,
        ["age"]:e.age,
        ["email"]:e.email,
        ["phone"]:e.phone,
        ["gender"]:e.gender
    })
console.log(datas)
    setpopup(true)
  }

  return (
    <>
      <section className=" ">
        <div className="flex place-content-center">
          <div className="relative w-full sm:w-[15%] m-2 ">
            <input
              type="search"
              placeholder="Search by Name..."
              className="p-2 pr-10 w-full rounded focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex place-content-center  ">
          <div className="w-full sm:w-[40%] rounded bg-white p-[15px]">
            {membersList.map((e,index) => {
              return (
                <div
                  className="w-full grid bg-white border-b-2  p-2 relative "
                  onClick={()=>handlePopup(e)} key={index}
                >
                  <img
                    src="https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg"
                    alt="profile"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <h3 className="p-4 absolute top-1/2 left-12 ml-2 transform -translate-y-1/2">
                    {e.firstName}
                  </h3>
                  <FaGreaterThan className="justify-self-end mr-3  absolute top-1/2 text-gray-400" />
                </div>
              );
            })}
          </div>
        </div>
        {<Popup userdata={datas}/>}
      </section>
    </>
  );
}
