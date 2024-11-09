import { IoMdCloseCircleOutline } from "react-icons/io";


export default function Popup({userdata}) {


  
    console.log('name '+userdata.age)
  return (
    <>
      <section >
        <div className="popup-window bg-white w-[500px] h-auto p-2 m-4 rounded flex flex-col">
        <IoMdCloseCircleOutline  className="ml-auto cursor-pointer"size={25}/>

          <div className="img-name  flex p-3 ">
            <div className=" ">
              <img
                src="https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg"
                alt=""
                className="w-[75px] rounded m-2 "
              />
            </div>
            <div className="p-2 font-bold">
              <h3>Name : {userdata.Name} </h3>
              <h2>Age : {userdata.age} </h2>
              <h2>Gender : {userdata.gender} </h2>

            </div>
            </div>
            <div className="mail border-b border-gray-300 text-start p-3 ">
               <h4>E-mail : {userdata.email}</h4>
            </div>
            <div className="pnumber border-b border-gray-300 text-start p-3 ">
                <h4>Phone: {userdata.phone}</h4>
            </div>
         
        </div>
      </section>
    </>
  );
}
