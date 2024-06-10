import { Outlet, Link } from "react-router-dom";
import "./LayoutDefault.scss";
import CartMini from "../../components/CartMini/CartMini";
function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="layout-default__cart">
            <CartMini />
          </div>
        </header>
        <main className="layout-default__main">
          <Outlet />
          {/* Xác địng vị trí các componate được hiển thị */}
        </main>
        <footer className="layout-default__footer">Fpt 2024</footer>
      </div>
    </>
  );
}

export default LayoutDefault;
