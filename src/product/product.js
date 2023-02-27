import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, router, useState } from "../lib";

const product = () => {
  const [products, setProduct] = useState([]);
  useEffect(async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProduct(data);
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    console.log(btns);
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.dataset.id;

        Swal.fire({
          title: "Bạn có muốn xóa không?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Delete",
          denyButtonText: `Don't Delete`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            fetch("http://localhost:3000/products/" + id, {
              method: "DELETE",
            }).then(() => {
              const newform = products.filter((product) => product.id != id);
              setProduct(newform);
            });
          } else if (result.isDenied) {
            Swal.fire("Changes are not delete", "", "info");
          }
        });
      });
    }
  });

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
            ${products
              .map((product, index) => {
                return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.cate}</td>
                    <td>${product.des}</td>
                    <td><img style="width:150px" src="${
                      product.img
                    }"> </img></td>
                    <td>${product.regular}</td>
                    <td>
                    <button data-id="${
                      product.id
                    }" class="btn btn-danger btn-remove">Remove</button>
                        <a href="/#/product/${product.id}/edit" >Edit</a>
                    </td>
                </tr>
                `;
              })
              .join("")}
                
            </tbody>
    </table>
  </div>`;
};

export default product;
