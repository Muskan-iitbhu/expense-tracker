
import { dateFormat } from "../../utils/dateFormat.jsx";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  rupee,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icons.jsx";
import Button from "../button/Button.jsx";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type, //inputs(props)
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };
  const icon = type === "expense" ? expenseCatIcon() : categoryIcon();

  return (
    <div
      className="d-flex align-items-center gap-2 p-2 mt-2 mb-3 bg-white border rounded shadow-xs w-100"
      style={{
        background: "#FCF6F9",
        border: "2px solid #FFFFFF",
        borderRadius: "20px",
      }}
    >
      {/* Icon */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          background: "#F5F5F5",
          border: "2px solid #FFFFFF",
          fontSize: "30px",
          color: "#C3B5FF",
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex-grow-1 d-flex flex-column ">
        <h5
          className="position-relative ps-4 mb-1"
          style={{ fontSize: "1.2rem" }}
        >
          {title}
          <span
            className="position-absolute top-50 start-0 translate-middle-y rounded-circle"
            style={{
              width: "0.8rem",
              height: "0.8rem",
              background: indicatorColor,
            }}
          ></span>
        </h5>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <p className="d-flex align-items-center gap-1 text-primary opacity-75 m-0">
              {rupee} {amount}
            </p>
            <p className="d-flex align-items-center gap-1 text-primary opacity-75 m-0">
              {calender} {dateFormat(date)}
            </p>
            <p className="d-flex align-items-center gap-1 text-primary opacity-75 m-0">
              {comment} {description}
            </p>
          </div>
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center border-0"
            style={{
              width: "50px",
              height: "50px",
              marginBottom: "10px", marginRight:"10px",
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-green)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary-color)")
            }
            onClick={() => deleteItem(id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
