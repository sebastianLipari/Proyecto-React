import CartIcon from "../Icons/CartIcon";

export const CartWidget = ({cantidad}) => {
  return (
    <button type="button" className="btn btn-primary position-relative">
      <CartIcon color={"white"} tamaño={25} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       {cantidad}
      </span>
    </button>
  );
};
