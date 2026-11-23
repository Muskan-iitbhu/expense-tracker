import avatar from "../../img/avatar.png";
import { signout } from "../../utils/Icons.jsx";
import { menuItems } from "../../utils/menuItems.jsx";
import { useAuth } from "../../context/authContext.jsx";


function Navigation({ active, setActive }) {
  const { user , logout } = useAuth();
  return (
    <nav
      className="d-flex flex-column justify-content-between gap-3 p-4 bg-white border border-3 border-white rounded-4"
      style={{
        background: "rgba(252, 246, 249, 0.78)",
        backdropFilter: "blur(4.5px)",
        width: "374px",
        height: "100%",
      }}
    >
      {/* User */}
      <div className="d-flex align-items-center gap-3">
        <img
          src={avatar}
          alt=""
          className="rounded-circle border border-white p-1 shadow"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            background: "#fcf6f9",
          }}
        />
        <div>
          <h5 className="mb-0 text-primary">{user ? user.name : "User"}</h5>
          <small className="text-muted">Your Money</small>
        </div>
      </div>

      {/* Menu */}
      <ul className="list-unstyled flex-grow-1 mt-3">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`d-flex align-items-center px-3 py-2 mb-2 rounded ${
              active === item.id
                ? "bg-light text-primary fw-bold border-start border-4 border-primary"
                : "text-muted"
            }`}
            style={{ cursor: "pointer" }}
          >
            <span className="me-2">{item.icon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>

      {/* Sign Out */}
      <div>
        <li
          className="list-unstyled d-flex align-items-center text-danger"
          style={{ cursor: "pointer" }}
          onClick={logout}
        >
          {signout}
          <span className="ms-2">Sign Out</span>
        </li>
      </div>
    </nav>
  );
}

export default Navigation;
