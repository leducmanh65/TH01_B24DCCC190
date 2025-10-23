import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h2 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>My Blog</h2>
      <div>
        <NavLink to="/" className={({ isActive }: any) => (isActive ? "active" : "") }>
          Trang chủ
        </NavLink>
        <button onClick={() => navigate("/create")}>Viết bài</button>
      </div>
    </nav>
  );
}
