import { useEffect, useState, useCallback } from "react";
import { Order, OrderStatus } from "../../api/server/orders/types";
import AppPrimaryTable, { AppTableProps } from "../../components/tables/primary";
import { useAppRequest } from "../../hooks/use-request";
import {
  StyledInputsWrapper,
  StyledOrderDetailsWrapper,
  StyledOrderPageContent,
  StyledOrderPageSubtitle,
  StyledOrderPageTitle,
  StyledOrderPageWrapper,
  StyledTableAndInfoWrapper,
  StyledTableWrapper,
} from "./styled";
import { GetNotDeliveredOrderRequest, UpdateOrderStatusRequest } from "../../api/server/orders/requests";
import { IconMagnifyingGlass, IconPizza } from "../../icons";
import AppTextInput, { InputProps } from "../../components/inputs/text";
import { useInput } from "../../hooks/use-input";
import AppDropdown from "../../components/inputs/dropdown";
import { setOrders, updateOrder } from "../../redux/features/orders";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { formatDistanceToNow } from "date-fns";
import { theme } from "../../theme";
import OrderDetails from "../../components/order-details";

const formatTimeAgo = (date: Date | string): string => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  return formatDistanceToNow(parsedDate, { addSuffix: true }).replace("about ", "");
};

const getStatusBackgroundColor = (status: OrderStatus): string => {
  switch (status) {
    case OrderStatus.Received:
      return theme.palette.colors.backgrounds.status.Received; // Received
    case OrderStatus.Preparing:
      return theme.palette.colors.backgrounds.status.Preparing; //Preparing
    case OrderStatus.Ready:
      return theme.palette.colors.backgrounds.status.Ready; // Ready
    case OrderStatus.EnRoute:
      return theme.palette.colors.backgrounds.status.EnRoute; // EnRoute
    case OrderStatus.Delivered:
      return theme.palette.colors.backgrounds.status.Delivered; // Delivered
  }
};

const OrderPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [tableData, setTableData] = useState<AppTableProps<Order>["tableData"] | null>(null);
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

  const [sortBy, setSortBy] = useState<"Date" | "Items amount" | "Order Id" | "None">("None");

  const getAllNotDeliveredOrdersRequest = useAppRequest<Order[]>();
  const updateOrderStatus = useAppRequest<Order>();

  useEffect(() => {
    const fetchAndUpdateRedux = async () => {
      const fetchedOrders = await getAllNotDeliveredOrdersRequest.fetchData<GetNotDeliveredOrderRequest>({ method: "GET", url: "/order" });
      if (fetchedOrders) {
        dispatch(setOrders(fetchedOrders));
      }
    };

    // Run for the first time
    fetchAndUpdateRedux();

    // Set interval to run every x seconds
    const intervalId = setInterval(() => {
      fetchAndUpdateRedux();
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (orders) {
      const customTableData = transformDataToTableData(orders as Order[]);
      setTableData(customTableData);
    }
  }, [orders]);

  const transformDataToTableData = (data: Order[]): AppTableProps<Order>["tableData"] => {
    return [
      {
        head: "Order Id",
        children: data.map((order) => ({
          cellText: order.id,
          payload: order,
          onClick(payload) {
            setSelectedOrder(payload);
          },
        })),
      },
      {
        head: "Items Count",
        children: data.map((order) => ({
          cellText: order.orderItems.length,
          payload: order,
          onClick(payload) {
            setSelectedOrder(payload);
          },
        })),
      },
      {
        head: "Customer Name",
        children: data.map((order) => ({
          cellText: order.customerName,
          payload: order,
          onClick(payload) {
            setSelectedOrder(payload);
          },
        })),
      },
      {
        head: "Customer Phone",
        children: data.map((order) => ({
          cellText: order.customerPhone,
          payload: order,
          onClick(payload) {
            setSelectedOrder(payload);
          },
        })),
      },
      {
        head: "Status",
        children: data.map((order) => ({
          payload: order,
          cellText: order.status,
          onClick(payload) {
            setSelectedOrder(payload);
          },
          element: (
            <AppDropdown
              backgroundColor={getStatusBackgroundColor(order.status)}
              options={Object.values(OrderStatus).map((status) => ({
                label: status,
                value: status,
                backgroundColor: getStatusBackgroundColor(status),
              }))}
              onChange={(value) => onUpdateOrderStatus(value as OrderStatus, order)}
              value={order.status}
            />
          ),
        })),
      },
      {
        head: "Received at",
        children: data.map((order) => ({
          cellText: formatTimeAgo(order.createdAt),
          payload: order,
          onClick(payload) {
            setSelectedOrder(payload);
          },
        })),
      },
      {
        head: "Comment",
        children: data.map((order) => ({
          cellText: order.comment || "N/A",
          payload: order,
          onClick(payload) {
            setSelectedOrder(payload);
          },
        })),
      },
    ];
  };

  const filterOrdersBySearch = useCallback((orders: Order[], searchValue: string): Order[] => {
    return orders.filter((order) => JSON.stringify(order).toLowerCase().includes(searchValue.toLowerCase()));
  }, []);

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

  useEffect(() => {
    let sorted = [...orders];

    // Filter based on search state
    if (searchState.value) {
      sorted = filterOrdersBySearch(sorted, searchState.value);
    }

    if (sortBy === "Items amount") {
      sorted = sorted.sort((a, b) => b.orderItems.length - a.orderItems.length);
    } else if (sortBy === "Date") {
      sorted = sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortBy === "Order Id") {
      sorted = sorted.sort((a, b) => a.id - b.id);
    }

    setTableData(transformDataToTableData(sorted));
  }, [sortBy, orders, searchState.value]);

  const onCloseOrderDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <StyledOrderPageWrapper>
      {tableData?.length ? (
        <StyledOrderPageContent>
          <div>
            <StyledOrderPageTitle>
              Pizza S&S.. <IconPizza />
            </StyledOrderPageTitle>
            <StyledOrderPageSubtitle>The Best Pizza In The World!,({orders.length} UnDelivered Orders for now..)</StyledOrderPageSubtitle>
          </div>
          <StyledInputsWrapper>
            <AppTextInput stateProps={searchState} staticsProps={staticsSearch} />
            <div>
              <AppDropdown
                label="Sort"
                options={[
                  { value: "Date", label: "Date" },
                  { value: "Items amount", label: "Items amount" },
                  { value: "Order Id", label: "Order Id" },
                  { value: "None", label: "None" },
                ]}
                onChange={(value) => setSortBy(value as any)}
                value={sortBy}
              />
            </div>
          </StyledInputsWrapper>
          <StyledTableAndInfoWrapper>
            <StyledTableWrapper showInfo={selectedOrder !== null}>
              <AppPrimaryTable selectedId={selectedOrder?.id || -1} tableData={tableData} />
            </StyledTableWrapper>
            {selectedOrder ? (
              <StyledOrderDetailsWrapper>
                <OrderDetails onClose={onCloseOrderDetails} order={selectedOrder} />
              </StyledOrderDetailsWrapper>
            ) : null}
          </StyledTableAndInfoWrapper>
        </StyledOrderPageContent>
      ) : (
        "Loading data..."
      )}
    </StyledOrderPageWrapper>
  );
};
export default OrderPage;
