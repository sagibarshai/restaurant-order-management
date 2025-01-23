import { Order } from "../../api/server/orders/types";
import { StyledOrderDetailsWrapper, StyledKeyValueRow, StyledCloseButton, StyledTitle, StyledStrong } from "./styled";

interface OrderDetailsProps {
  order: Order;
  onClose: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onClose }) => {
  return (
    <StyledOrderDetailsWrapper>
      <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
      <StyledTitle>Order Details</StyledTitle>
      <hr />

      <StyledKeyValueRow>
        <strong>Order ID:</strong> {order.id}
      </StyledKeyValueRow>

      <hr />
      {/* Display Items */}
      <StyledTitle>Items</StyledTitle>
      {order.orderItems?.map((item, index) => (
        <div key={index + item.title}>
          <StyledKeyValueRow>
            <StyledStrong>{`#${index + 1}`} Item:</StyledStrong> {item.title}
          </StyledKeyValueRow>
          <StyledKeyValueRow>
            <StyledStrong>Price:</StyledStrong> ${item.price}
          </StyledKeyValueRow>
          <StyledKeyValueRow>
            <StyledStrong>Type:</StyledStrong> {item.type}
          </StyledKeyValueRow>
          {item.comment && (
            <StyledKeyValueRow>
              <StyledStrong>Item Comment:</StyledStrong> {item.comment}
            </StyledKeyValueRow>
          )}
          {/* Display Addons for each item */}
          {item.itemsAddons && item.itemsAddons.length > 0 && (
            <>
              {item.itemsAddons?.map((addon, addonIndex) => (
                <StyledKeyValueRow key={addonIndex + addon.title}>
                  <StyledStrong>{`#${addonIndex + 1}`} Topping:</StyledStrong> {addon.title} - ${addon.price}
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
