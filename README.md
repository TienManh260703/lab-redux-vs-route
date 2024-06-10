# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Ví dụ: Làm trang danh sách sản phẩm và trang giỏ hàng (để add sản phẩm vào giỏ hàng và lưu vào redux).

Hiển thị danh sách sản phẩm.

Hiển thị giỏ hàng, tính toán để ra được tổng tiền đơn hàng.

Icon giỏ hàng thêm tag số lượng sp trong giỏ (dùng reduce() trong js để tính tổng).

Khi click vào nút thêm vào giỏ hàng thì sẽ add sản phẩm vào trong redux, nếu sản phẩm đã thêm rồi thì tăng lên thêm.

