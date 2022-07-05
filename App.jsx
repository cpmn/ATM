
const ATMDeposit = ({ isDeposit, amount }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number"className="form-control" value={amount} readOnly></input>
                 
    </label>
  );
};

const Account = ({customer}) => {
  let deposit = 0; // state of this transaction
  const [amount, setAmount] = React.useState("");
  const [totalState, setTotalState] = React.useState(customer.balance);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let customerName = `Customer: ${customer.name}`;
  let customerAccount = `Account: ${customer.account}`;
  let status = `Balance: $ ${totalState} `;  

  const handleSubmit = () => {
    deposit = Number(amount);    
    if (!isDeposit && (totalState - deposit) < 0)
    {
      alert("insufficient balance");
      
    } else {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
    }    
    setAmount("");    
    event.preventDefault();
    
  };
  
  const handleChange = (e) => {
    console.log(`handleChange ${e.target.dataset.value}`);
    setAmount(amount.concat(e.target.dataset.value));    
  }
  const clear = () => setAmount("");

  return (
    <form onSubmit={handleSubmit}>
      
      <h5>{customerName}</h5>  
      <h5>{customerAccount}</h5>  
      <h5 id="total">{status}</h5>        
      <div className="row">
      <ATMDeposit isDeposit={isDeposit} amount={amount}></ATMDeposit>
      </div>
      
      <div id="pinPad">
      <table>
        <tbody>
          <tr>
          <td colSpan="3"><input type="radio" onChange={() => setIsDeposit(true)} checked={isDeposit} /> Deposit</td>       
          <td colSpan="3"><input type="radio" onChange={() => setIsDeposit(false)} checked={!isDeposit} /> Cash Back   </td>
          </tr>
        <tr>
          
          <td><a data-value="1" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">1</a></td>
          <td><a data-value="2" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">2</a></td>
          <td><a data-value="3" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">3</a></td>        
          <td><a data-value="4" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">4</a></td>
          <td><a data-value="5" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">5</a></td> 
          
        </tr>
        <tr>
          
          <td><a data-value="6" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">6</a></td>
          <td><a data-value="7" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">7</a></td>
          <td><a data-value="8" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">8</a></td>
          <td><a data-value="9" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">9</a></td>
          <td><a data-value="0" onClick={handleChange} className="btn btn-block btn-lg btn-inverse">0</a></td>
          
        </tr>
        <tr>          
          <td colSpan="2"><a  onClick={clear} className="btn btn-block btn-lg btn-default text-uppercase">Clear</a></td>
          <td colSpan="3"><input type="submit" width="200" value="Confirm" className="btn btn-block btn-lg btn-primary text-uppercase"></input></td>
        </tr>
        </tbody>
      </table>
      </div>
      
          
    </form>
    
  );
};

const customer =  {name: "Claudia Paola Munoz", balance: 1500, account:"BBA-1254" };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Account customer={customer}/>
  </React.StrictMode>
);

