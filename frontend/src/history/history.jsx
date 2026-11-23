import { useGlobalContext } from '../context/globalContext.jsx';

function History() {
  const { transactionHistory } = useGlobalContext();       //give us a list of past transactions.
  const [...history] = transactionHistory();

  //transactionHistory() → gives an array of transactions (like a list: salary, groceries, etc.).
  //[...history] = ... → copies all transactions into a new array called history.

  return (
    <div>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div
            key={_id}
            className="d-flex justify-content-between align-items-center bg-light p-3 mb-3 rounded shadow-sm"
            style={{ border: '2px solid #fff' }}
          >
            <p
              className="mb-0"
              style={{ color: type === 'expense' ? 'red' : 'green' }}
            >
              {title}
            </p>
            <p
              className="mb-0"
              style={{ color: type === 'expense' ? 'red' : 'green' }}
            >
              {type === 'expense'
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default History;


/* 1️⃣ Get transaction list from global data.
2️⃣ For each transaction:

Show its name.

Show amount (+ or -).

Make it red or green.
3️⃣ Show all in a nice list.

 */