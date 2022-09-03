import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommonMenu from "./CommonMenu/CommonMenu";
import HomePost from "./Home/Product/Posts";
import HomeSale from "./Home/Product/Sale";
import AddPostAndProduct from "./User/AddItems/SmallView/AddItems";
import EditProfile from "./User/Profile/EditProfile";
import UserProfile from "./User/UserMain";
import ViewSaleMD from "./ViewItems/Sale/ViewSaleMD";
import ViewSaleXS from "./ViewItems/Sale/ViewSaleXS";
import ViewPostOrSale from "./ViewItems/ViewPostOrSaleXS";

export const RouterComponent = () => (
  <Router>
    <CommonMenu />
    <Routes>
      <Route path="/" element={<HomeSale />} />
      <Route path="/post" element={<HomePost />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/add" element={<AddPostAndProduct />} />
      <Route path="/viewproduct" element={<ViewSaleXS />} />
      <Route path="/viewproduct_/:id" element={<ViewSaleMD />} />
      <Route path="/view" element={<ViewPostOrSale />} />
    </Routes>
  </Router>
);
