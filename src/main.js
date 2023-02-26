import 'bootstrap/dist/css/bootstrap.min.css'
import { render, router } from './lib';
import product from './product/product';
import productAdd from './product/product-add';
import productEdit from './product/product-edit';

const app = document.querySelector('#app');

router.on('/product',()=>render(product,app));
router.on('/product/add',()=>render(productAdd,app));
router.on('/product/:id/edit',({data})=>render(()=>productEdit(data),app));
router.resolve()
