import axios from "axios";
import { useEffect,router } from "../lib";

const productAdd = () => {
    useEffect(()=>{
        const form = document.querySelector('#form-add');
        const name = document.querySelector('#product-name');
        const cate = document.querySelector('#product-cate');
        const des = document.querySelector('#product-des');
        const img = document.querySelector('#product-img');
        const regular = document.querySelector('#product-regular');

        form.addEventListener('submit',async(e)=>{
            e.preventDefault();
            const file = img.files[0];
            const url = await uploadFile(file)
            
           const formNew = {
                name: name.value,
                cate: cate.value,
                des: des.value,
                img: url,
                regular: regular.value,
            }
           
        })
        
        const uploadFile = async(file)=>{
            if(file){
                const CLOUD_NAME =  "dtiwyksp8";
                const PRESET_NAME = "portfolio_ECMA";
                const FOLDER_NAME = "Portfolio_ECMA";
                const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
                const formdata = new FormData();
                formdata.append("upload_preset",PRESET_NAME);
                formdata.append("folder",FOLDER_NAME);
                formdata.append("file",file);

                const response = await axios.post(api,formdata,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                return response.data.secure_url
            }
        }

    },[])
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
  