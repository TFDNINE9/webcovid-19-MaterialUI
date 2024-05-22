
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function Covidintheworld() {
  const [covidData, setcovidData] = useState([]);
  const [covidDataCountry, setCovidDataCountry] = useState([]);

  const clickHandler = (item) => {
    setCovidDataCountry(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries",
      requestOptions
    );
    const data = await response.json();
    setcovidData(data);
  };

  console.log("data Covid", covidData);
  return (
    <div>
      <div className=" mx-20">
        {covidDataCountry && (
          <div className=" border px-5 pb-5 rounded-xl bg-slate-50 shadow-lg">
            <div className="text-right pt-2">
              <IconButton
                color="error"
                size="small"
                onClick={() => setCovidDataCountry()}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="flex flex-col items-center mb-5">
              <img
                src={covidDataCountry.countryInfo?.flag}
                alt=""
                className=" h-12 object-contain mb-3"
              />
              <p className=" text-2xl font-bold text-gray-500">
                {covidDataCountry.country}
              </p>
              <p className=" text-2xl font-bold text-gray-500">
                {covidDataCountry.continent}
              </p>
            </div>
            <div className="flex justify-between">
              <div class="bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg">
                <p class="text-[#6b6767] text-xl boonhome">ຕິດທັງໝົດ</p>
                <p class="text-[#000000] font-extrabold text-3xl boonhome">
                  {covidDataCountry.cases} <span class="text-lg"> ຄົນ</span>
                </p>
              </div>
              <div className=" bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg ml-20 ">
                <p className="text-[#6b6767] text-xl">ກໍາລັງປິ່ນປົວ</p>
                <p className="text-[#000000] font-extrabold text-3xl">
                  {covidDataCountry.active}{" "}
                  <span className=" text-xl"> ຄົນ</span>
                </p>
              </div>
              <div className=" bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg ml-20 ">
                <p className="text-[#6b6767] text-xl">ປົວດີແລ້ວ</p>
                <p className="text-[#000000] font-extrabold text-3xl">
                  {covidDataCountry.recovered}{" "}
                  <span className=" text-xl"> ຄົນ</span>
                </p>
              </div>
              <div className=" bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg ml-20 ">
                <p className="text-[#6b6767] text-xl">ເສຍຊີວິດ</p>
                <p className="text-[#000000] font-extrabold text-3xl">
                  {covidDataCountry.deaths}{" "}
                  <span className=" text-xl"> ຄົນ</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" mx-20">
        <div className=" border-b-2 mt-10" />
        <div className=" overflow-y-scroll h-96 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          <table className=" border w-full mt-10">
            <thead className=" bg-slate-400 h-16">
              <tr>
                <th>Flag</th>
                <th class="flex-1">Country Name</th>
                <th>Total Cases</th>
                <th>Total Active</th>
                <th>Total Deaths</th>
              </tr>
            </thead>
            <tbody>
              {covidData.map((item, index) => (
                <tr
                  key={index}
                  className=" hover:bg-slate-100 cursor-pointer"
                  onClick={() => clickHandler(item)}
                >
                  <td>
                    <img
                      src={item.countryInfo.flag}
                      alt=""
                      className="w-20 object-contain"
                    />
                  </td>
                  <td>{item.country}</td>
                  <td className=" text-right">
                    {item.cases.toLocaleString("en-US")}
                  </td>
                  <td className=" text-right">
                    {item.active.toLocaleString("en-US")}
                  </td>
                  <td className=" text-right">
                    {item.deaths.toLocaleString("en-US")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
                  }

        export default Covidintheworld;
                  
