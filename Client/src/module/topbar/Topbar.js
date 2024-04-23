import React from "react";
const opts = [{name: "name", label: "model"},{name: "price", label: "price"},{name: "location", label: "location"},{name: "type", label: "Car Type"},{name: 'year', label: 'year'}];
const Topbar = ({setSearchTerm, setType, role}) => {

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(e?.target?.value);
    setSearchTerm(e?.target?.value);
  };

  return (
    <section className="lg:mt-[94px] mt-[129px]">
      <div className="navbar bg-success w-10/12 rounded-md mx-auto mt-20">
        <div className="flex-1">
          <h1 className="text-purple-700 font-semibold uppercase text-xl">{role? "Inventory Items" : "Our Collections"}</h1>
        </div>
        <div className="d-flex gap-2 mr-5">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 mt-2 md:w-auto"
              onChange={(e)=> handleSearch(e)}
            />
          </div> 
          <div className="">
            <div>
              <div className=" mr-5">
                <select
                  className="select select-bordered w-full p-3" 
                  onChange={(e)=> setType(e?.target?.value)}
                >
                  <option disabled selected>
                    All
                  </option>
                  {opts.map((opt) => (
                    <option key={opt} value={opt.name}>
                      <span  className="text-uppercase">{opt.label}</span>
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
