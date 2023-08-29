// import React from 'react'

function Donate() {
  return (
    <>
      <form className="row row-cols-lg-auto g-3 align-items-center">
        <div className="col-12">
          <label
            className="visually-hidden"
            htmlFor="inlineFormInputGroupUsername"
          >
            Username
          </label>
          <div className="input-group">
            <div className="input-group-text">Name</div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Enter Your Full Name"
            />
          </div>
        </div>
        <div className="col-12">
          <label className="visually-hidden" htmlFor="inlineFormSelectPref">
            Preference
          </label>
          <select className="form-select" id="inlineFormSelectPref">
            <option selected>Amount</option>
            <option value={1}>$1</option>
            <option value={2}>$50</option>
            <option value={3}>$100</option>
          </select>
        </div>
        <div className="col-12"></div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Donate
          </button>
        </div>
      </form>
    </>
  );
}

export default Donate;
