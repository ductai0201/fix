import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, router } from "../lib";

const productAdd = () => {

  return `
    <div class="container pt-5">
    <form action="" id="form-add">
        <div class="form-group">
            <label for="" class="form-label">Name</label>
            <input type="text" class="form-control" id="product-name">
        </div>
        
        <div class="form-group">
            <label for="" class="form-label">Categories </label>
            <input type="text" class="form-control" id="product-cate">
        </div>

        <div class="form-group">
            <label for="" class="form-label">Description </label>
            <input type="text" class="form-control" id="product-des">
        </div>

        <div class="form-group">
            <label for="" class="form-label">Images </label>
            <input type="file" class="form-control" id="product-img">
        </div> 
        
        <div class="form-group">
            <label for="" class="form-label">Regular price</label>
            <input type="text" class="form-control" id="product-regular">
        </div>

        <button class="btn btn-primary mt-3">Thêm</button>
    </form>
</div>`;
};

export default productAdd;
