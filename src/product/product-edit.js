import axios from "axios";
import Swal from "sweetalert2";
import { router, useEffect, useState } from "../lib";
const productEdit = () => {

 

  return `
  <div class="container pt-5">
  <form action="" id="form-update">
   
      
      <div class="form-group">
          <label for="" class="form-label">Name</label>
          <input type="text" class="form-control" id="product-name" value="${products.name}">
      </div>
      
      <div class="form-group">
          <label for="" class="form-label">Categories </label>
          <input type="text" class="form-control" id="product-cate" value="${products.cate}">
      </div>

      <div class="form-group">
          <label for="" class="form-label">Description </label>
          <input type="text" class="form-control" id="product-des" value="${products.des}">
      </div>

      <div class="form-group">
          <label for="" class="form-label">Images </label>
          <img style="width:150px" class="currenImg" src="${products.img}"> </img>
          <input type="file" class="form-control" id="product-img">
      </div> 
      
      <div class="form-group">
          <label for="" class="form-label">Regular price</label>
          <input type="text" class="form-control" id="product-regular" value="${products.regular}">
      </div>
      

      <button class="btn btn-primary mt-3">Thêm</button>
  </form>
</div>`;
};

export default productEdit;
