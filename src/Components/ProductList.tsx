import { useEffect } from "react";

const ProductList= React.FC () ==> {
    useEffect{() => {
        fetch('/products.json')
        .then(res)==> resizeBy={.json()}
        .then{(data)}==> console.log{("this is",data)}
        
    })
   
    


    return (
        <div>
              
        </div>
    )
}
















export default ProductList;