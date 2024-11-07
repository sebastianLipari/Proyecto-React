import CartIcon from "../Icons/CartIcon";

export const CartWidget = ({cantidad}) => {
  return (
    <button type="button" class="btn btn-primary position-relative">
      <CartIcon color={"white"} tamaño={25} />
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       {cantidad}
      </span>
    </button>
  );
};
