import { Order } from "../../api/server/orders/types";
import { StyledOrderDetailsWrapper, StyledKeyValueRow, StyledCloseButton } from "./styled";

interface OrderDetailsProps {
  order: Order;
  onClose: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onClose }) => {
  return (
    <StyledOrderDetailsWrapper>
      <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
      <h2>Order Details</h2>
      <hr />

      <StyledKeyValueRow>
        <strong>Order ID:</strong> {order.id}
      </StyledKeyValueRow>

      <hr />
      {/* Display Items */}
      <h3>Items</h3>
      {order.orderItems?.map((item, index) => (
        <div key={index + item.title}>
          <StyledKeyValueRow>
            <strong>{`#${index + 1}`} Item:</strong> {item.title}
          </StyledKeyValueRow>
          <StyledKeyValueRow>
            <strong>Price:</strong> ${item.price}
          </StyledKeyValueRow>
          <StyledKeyValueRow>
            <strong>Type:</strong> {item.type}
          </StyledKeyValueRow>
          {item.comment && (
            <StyledKeyValueRow>
              <strong>Item Comment:</strong> {item.comment}
            </StyledKeyValueRow>
          )}
          {/* Display Addons for each item */}
          {item.itemsAddons && item.itemsAddons.length > 0 && (
            <>
              {item.itemsAddons?.map((addon, addonIndex) => (
                <StyledKeyValueRow key={addonIndex + addon.title}>
                  <strong>{`#${addonIndex + 1}`} Topping:</strong> {addon.title} - ${addon.price}
                </StyledKeyValueRow>
              ))}
            </>
          )}
          <hr />
        </div>
      ))}
    </StyledOrderDetailsWrapper>
  );
};

export default OrderDetails;
