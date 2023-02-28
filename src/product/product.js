import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, router, useState } from "../lib";

const product = () => {
  

  return `
  <div class="container pt-5">
    <button type="button" class="btn btn-success text-light"><a href="/product/add">Thêm</a></button>
  
    <h1>Product</h1>
    <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Categories</th>
                    <th>Product Description</th>
                    <th>Product Images</th>
                    <th>Regular price</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
           
             
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><img style="width:150px" src=""> </img></td>
                        <td></td>
                        <td>
                        <button data-id="" class="btn btn-danger btn-remove">Remove</button>
                            <a href="/#/product/:id/edit" >Edit</a>
                        </td>
                    </tr>
            
                
            </tbody>
    </table>
  </div>`;
};

export default product;
