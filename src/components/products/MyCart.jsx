import { CartContext } from "./../../context";
import { useContext } from "react";

export const MyCart = () => {
  const theCartContext = useContext(CartContext);

  return (
    <>
      <div className="container">
        <div className="d-flex bg-dark w-90 mx-auto align-items-center p-3">
          <h5 className="text-white m-0">Store</h5>
        </div>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Qty</th>
              <th scope="col">Product</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {theCartContext.cart.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.quantity}</td>
                  <td>{item.product.name}</td>
                  <td>${item.totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td> </td>
              <td> </td>
              <td>
                <b>${theCartContext.cart.total} </b>{" "}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
