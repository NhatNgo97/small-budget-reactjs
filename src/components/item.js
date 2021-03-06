import { useDispatch } from "react-redux/es/exports";
import { deleteItemAction } from "../redux/actions";
import { VndCurrencyConverter } from "../helper/VndCurrencyConverter";

export default function Item({
  id,
  type,
  description,
  amount,
  percentage,
  date,
}) {
  const dispatch = useDispatch();
  function handleDeleteClick() {
    dispatch(deleteItemAction(id));
  }

  function converttoMonth(d) {
    const options = { month: "short", day: "numeric" };
    return new Date(d).toLocaleDateString("en-EN", options);
  }
  return (
    <div className="item clearfix">
      <div className="iten__month">{converttoMonth(date)}</div>
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">{VndCurrencyConverter(amount)}</div>
        {type === "expenses" && (
          <div className="item__percentage">{parseInt(percentage)} %</div>
        )}
        <div className="item__delete">
          <button className="item__delete--btn">
            <i
              onClick={handleDeleteClick}
              className="ion-ios-close-outline"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}
