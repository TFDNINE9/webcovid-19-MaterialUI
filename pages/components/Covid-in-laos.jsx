
import React, { useEffect, useState } from 'react'

function Covidinlaos() {
    const [select, setSelect] = useState([]);
    useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://disease.sh/v3/covid-19/countries/Laos?strict=true",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setSelect(result))
      .catch((error) => console.log("error", error));
    }, [])
    
    return (
      <div>
        <div className="flex flex-col items-center mb-20 ">
          <img
            className=" h-12 object-contain mb-3"
            src="https://disease.sh/assets/img/flags/la.png"
          />
          <p className="text-2xl font-bold text-gray-500">{select.country}</p>
          <p className="text-xl font-bold text-gray-500">{select.continent}</p>
        </div>
        <div className="px-10">
          <p className="text-xl text-gray-500 font-bold boonhome my-3">
            - ສະພາບລວມ
          </p>
          <div className="flex">
            <div className="bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg">
              <p className="text-[#6b6767] text-xl boonhome">ຕິດທັງໝົດ</p>
              <p className="text-[#000000] font-extrabold text-3xl boonhome">
                {select.cases} <span className="text-lg"> ຄົນ</span>
              </p>
            </div>
            <div className=" bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg ml-20 ">
              <p className="text-[#6b6767] text-xl">ກໍາລັງປິ່ນປົວ</p>
              <p className="text-[#000000] font-extrabold text-3xl">
                {select.active} <span className=" text-xl"> ຄົນ</span>
              </p>
            </div>
            <div className=" bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg ml-20 ">
              <p className="text-[#6b6767] text-xl">ປົວດີແລ້ວ</p>
              <p className="text-[#000000] font-extrabold text-3xl">
                {select.recovered} <span className=" text-xl"> ຄົນ</span>
              </p>
            </div>
            <div className=" bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg ml-20 ">
              <p className="text-[#6b6767] text-xl">ເສຍຊີວິດ</p>
              <p className="text-[#000000] font-extrabold text-3xl">
                {select.deaths} <span className=" text-xl"> ຄົນ</span>
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-500 font-bold boonhome mt-32 mb-3">
            - ລາຍງານປະຈຳວັນ 25/4/2022
          </p>
          <div className="flex">
            <div className=" bg-slate-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg  mb-6">
              <p className=" text-xl text-[#6b6767]">ຕິດວັນນີ້</p>
              <p className="text-[#000000] font-extrabold text-3xl">
                {select.todayCases} <span className=" text-xl"> ຄົນ</span>
              </p>
            </div>
            <div className=" bg-slate-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg ml-52 mb-6">
              <p className=" text-xl text-[#6b6767]">ປົວດີວັນນີ້</p>
              <p className="text-[#000000] font-extrabold text-3xl">
                {select.todayRecovered} <span className=" text-xl"> ຄົນ</span>
              </p>
            </div>
            <div className=" bg-slate-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg ml-56 mb-6">
              <p className=" text-xl text-[#6b6767]">ເສຍຊີວິດວັນນີ້</p>
              <p className="text-[#000000] font-extrabold text-3xl">
                {select.todayDeaths} <span className=" text-xl"> ຄົນ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Covidinlaos