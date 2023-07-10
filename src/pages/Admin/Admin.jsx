import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Admin.css';

const Admin = props => {
  const { AddProductToProductList, addUrlToBannerUrl } = props;
  const [categoryValue, setCategoryValue] = useState({
    categoryName: '',
  });
  const [categoryList, setCategoryList] = useState([]);
  const onCategoryChange = e => {
    setCategoryValue({
      ...categoryValue,
      categoryName: e.target.value,
      categoryID: uuidv4(),
    });
  };
  const onSubmitFromCategory = e => {
    //ngăn không cho trang reload khi submit
    e.preventDefault();

    //thêm dữ liệu category vào categoryList
    setCategoryList([...categoryList, categoryValue]);
    setCategoryValue({ categoryName: '' });
  };
  const [productValue, setProductValue] = useState({
    productName: '',
    productCategory: '',
    productIamge: '',
    productPrice: '',
  });
  const onProductChange = e => {
    const { value, name } = e.target;
    setProductValue({
      ...productValue,
      [name]: value,
      productID: uuidv4(),
    });
  };
  const [urlBannerValue, setUrlBannerValue] = useState({
    banner1: '',
    banner2: '',
    banner3: '',
    logo: '',
  });
  const onUrlBannerChange = e => {
    const { value, name } = e.target;
    setUrlBannerValue({
      ...urlBannerValue,
      [name]: value,
    });
  };
  const onSubmitFromBanner = e => {
    e.preventDefault();

    addUrlToBannerUrl(urlBannerValue);
  };
  const onSubmitFrom = e => {
    //ngăn không cho trang reload
    e.preventDefault();

    //đây chính là hàm thêm sản phẩm mới vào productList được truyền từ app xuống thông qua props
    AddProductToProductList(productValue);

    //Set các trường input về trống
    setProductValue({
      productName: '',
      productCategory: '',
      productIamge: '',
      productPrice: '',
    });
  };
  return (
    <div class="d-flex align-items-start">
      <div
        class="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          class="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="add-product"
          aria-selected="true"
        >
          Thêm Sản Phẩm
        </button>
        <button
          className="nav-link"
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Thêm Danh Mục Sản Phẩm
        </button>

        <button
          class="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="banner-manager"
          aria-selected="false"
        >
          Quản Lý Banner
        </button>

        <button
          class="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="order-manager"
          aria-selected="false"
        >
          Quản Lý Đơn hàng
        </button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="add-product"
          tabindex="0"
        >
          <h1>Thêm Sản Phẩm Mới</h1>
          <form className="add-product-form" onSubmit={onSubmitFrom}>
            <label htmlFor="">Tên Sản Phẩm</label>
            <input
              type="text"
              value={productValue.productName}
              name="productName"
              onChange={onProductChange}
            />
            <label htmlFor="">Giá Sản Phẩm</label>
            <input
              type="number"
              value={productValue.productPrice}
              name="productPrice"
              onChange={onProductChange}
            />
            <label htmlFor="">Ảnh Sản Phẩm</label>
            <input
              type="text"
              value={productValue.productIamge}
              name="productIamge"
              onChange={onProductChange}
            />
            <label htmlFor="">Danh Mục Sản Phẩm</label>
            <select
              value={productValue.productCategory}
              onChange={onProductChange}
              name="productCategory"
            >
              {categoryList.map(category => {
                const { categoryName, categoryID } = category;
                return (
                  <option key={categoryID} value={categoryName}>
                    {categoryName}
                  </option>
                );
              })}
            </select>
            <button type="submit">Đăng Sản Phẩm</button>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-settings"
          role="tabpanel"
          aria-labelledby="v-pills-settings-tab"
          tabIndex={0}
        >
          <div>
            <h1>Thêm Danh Mục Sản Phẩm</h1>
            <form onSubmit={onSubmitFromCategory} className="add-product-form">
              <label htmlFor="">Tên Danh Mục</label>
              <input
                type="text"
                value={categoryValue.categoryName}
                onChange={onCategoryChange}
              />
              <button>Thêm Danh Mục Mới</button>
            </form>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="banner-manager"
          tabindex="0"
        >
          <form onSubmit={onSubmitFromBanner}>
            <label htmlFor="">Banner 1</label>
            <input
              type="text"
              onChange={onUrlBannerChange}
              name="banner1"
              value={urlBannerValue.banner1}
            />
            <label htmlFor="">Banner 2</label>
            <input
              type="text"
              onChange={onUrlBannerChange}
              name="banner2"
              value={urlBannerValue.banner2}
            />
            <label htmlFor="">Banner 3</label>
            <input
              type="text"
              onChange={onUrlBannerChange}
              name="banner3"
              value={urlBannerValue.banner3}
            />
            <button type="submit">Cập nhật</button>
          </form>
        </div>

        <div
          class="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="order-manager"
          tabindex="0"
        >
          order-manager
        </div>
      </div>
    </div>
  );
};

export default Admin;
