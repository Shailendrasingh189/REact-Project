import countries from "./countries";


const Converter = () => {
  return (
    <div className="currency-converter p-7 max-w-sm backdrop-blur-xl place-self-center px-10 py-5 rounded-md">
      <h1>Currency Converter</h1>
      <form className="converter-form">
        <div className="form-group">
          <label className="form-label">Enter Amount</label>
          <input type="number" className="form-input" required />
        </div>

        <div className="form-group">
          <div className="form-section">
            <label className="form-label">From</label>
            <div className="currency-select">
              <img src="https://flagsapi.com/US/flat/64.png" alt="flag" />
              <select id="currency" className="currency-dropdown">
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-section">
            <label className="form-label">To</label>
            <div className="currency-select">
              <img src="https://flagsapi.com/US/flat/64.png" alt="flag" />
              <select id="currency" className="currency-dropdown">
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Converter;
