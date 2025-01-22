import { Order, OrderStatus } from "../../api/server/orders/types";
import AppPrimaryTable, { AppTableProps } from "../../components/tables/primary";
import { useAppRequest } from "../../hooks/use-request";
import { StyledInputsWrapper, StyledOrderPageContent, StyledOrderPageSubtitle, StyledOrderPageTitle, StyledOrderPageWrapper } from "./styled";
import { GetNotDeliveredOrderRequest, UpdateOrderStatusRequest } from "../../api/server/orders/requests";
import { useCallback, useEffect, useState } from "react";
import { IconMagnifyingGlass, IconPizza } from "../../icons";
import AppTextInput, { InputProps } from "../../components/inputs/text";
import { useInput } from "../../hooks/use-input";
import AppDropdown from "../../components/inputs/dropdown";
import { setOrders, updateOrder } from "../../redux/features/orders";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const OrderPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders);

  const [tableData, setTableData] = useState<AppTableProps["tableData"] | null>(null);
  const [searchState, setSearchState, staticsSearch] = useInput<InputProps>({
    stateProps: {
      value: "",
      isValid: false,
      displayError: false,
    },
    staticsProps: {
      label: "Search Orders",
      onChange: (value) => setSearchState((prev) => ({ ...prev, isValid: value.length > 1, value, displayError: value.length !== 0 })),
      errorMessage: "2 chars minimum..",
      placeholder: "Type anything..",
      icon: <IconMagnifyingGlass color="black" />,
    },
  });

  // handle get not delivers orders
  const getAllNotDeliveredOrdersRequest = useAppRequest<Order[]>();

  // handle update orders status
  const updateOrderStatus = useAppRequest<Order>();

  useEffect(() => {
    // fetch the orders that not being delivered on mount and update redux
    const fetchAndUpdateRedux = async () => {
      const fetchedOrders = await getAllNotDeliveredOrdersRequest.fetchData<GetNotDeliveredOrderRequest>({ method: "GET", url: "/order" });
      if (fetchedOrders) {
        // update redux
        dispatch(setOrders(fetchedOrders));
      }
    };
    fetchAndUpdateRedux();
  }, []);

  useEffect(() => {
    if (orders) {
      const customTableData = transformDataToTableData(orders as Order[]);
      setTableData(customTableData);
    }
  }, [orders]);

  const transformDataToTableData = (data: Order[]): AppTableProps["tableData"] => {
    return [
      {
        head: "Order Id",
        children: data.map((order) => ({ cellText: order.id })),
      },

      {
        head: "Items Count",
        children: data.map((order) => ({
          cellText: order.orderItems.length,
        })),
      },
      {
        head: "Customer Name",
        children: data.map((order) => ({ cellText: order.customerName })),
      },
      {
        head: "Customer Phone",
        children: data.map((order) => ({ cellText: order.customerPhone })),
      },
      {
        head: "Status",
        children: data.map((order) => ({
          cellText: order.status,
          element: (
            <AppDropdown
              options={Object.values(OrderStatus)}
              onChange={(value) => onUpdateOrderStatus(value as OrderStatus, order)}
              value={order.status}
            />
          ),
        })),
      },
      {
        head: "Location",
        children: data.map((order) => ({
          cellText: `Lat: ${order.location.x}, Lon: ${order.location.y}`,
        })),
      },
    ];
  };

  const filterOrdersBySearch = useCallback((orders: Order[], searchValue: string): Order[] => {
    return orders.filter((order) => JSON.stringify(order).toLowerCase().includes(searchValue.toLowerCase()));
  }, []);

  useEffect(() => {
    // handle filter based on search input any time search input changes
    if (!searchState.value) {
      // if no search input return all results
      const customTableData = transformDataToTableData(orders as Order[]);
      setTableData(customTableData);
    } else if (searchState.isValid) {
      // if search input is valid, search based on the search input
      const filteredBySearch = filterOrdersBySearch(orders as Order[], searchState.value);
      const customTableData = transformDataToTableData(filteredBySearch as Order[]);
      setTableData(customTableData);
    }
  }, [searchState.value, orders]);

  const onUpdateOrderStatus = async (status: keyof typeof OrderStatus, order: Order) => {
    const updatedOrder = await updateOrderStatus.fetchData<UpdateOrderStatusRequest>({
      method: "patch",
      url: "/order/status/update",
      data: {
        id: order.id,
        status,
      },
    });
    if (updatedOrder) {
      dispatch(updateOrder({ order: updatedOrder }));
    }
  };

  return (
    <StyledOrderPageWrapper>
      {tableData?.length ? (
        <StyledOrderPageContent>
          <div>
            <StyledOrderPageTitle>
              Pizza S&S.. <IconPizza />
            </StyledOrderPageTitle>
            <StyledOrderPageSubtitle>The Best Pizza In The World!</StyledOrderPageSubtitle>
          </div>
          <StyledInputsWrapper>
            <AppTextInput stateProps={searchState} staticsProps={staticsSearch} />
          </StyledInputsWrapper>

          <AppPrimaryTable tableTitle="Unresolved Orders" tableData={tableData} />
        </StyledOrderPageContent>
      ) : (
        "Loading data..."
      )}
    </StyledOrderPageWrapper>
  );
};
export default OrderPage;
