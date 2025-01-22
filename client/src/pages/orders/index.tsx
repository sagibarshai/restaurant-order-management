import { Order } from "../../api/server/orders/types";
import AppPrimaryTable, { AppTableProps } from "../../components/tables/primary";
import { useAppRequest } from "../../hooks/use-request";
import { StyledInputsWrapper, StyledOrderPageContent, StyledOrderPageSubtitle, StyledOrderPageTitle, StyledOrderPageWrapper } from "./styled";
import { GetNotDeliveredOrderRequest } from "../../api/server/orders/requests";
import { useEffect, useState } from "react";
import { IconMagnifyingGlass, IconPizza } from "../../icons";
import AppTextInput, { InputProps } from "../../components/inputs/text";
import { useInput } from "../../hooks/use-input";

const OrderPage: React.FC = () => {
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

  const getAllNotDeliveredOrdersRequest = useAppRequest<GetNotDeliveredOrderRequest, Order[]>({
    url: "/order",
    method: "get",
  });

  useEffect(() => {
    // fetch the data on mount
    getAllNotDeliveredOrdersRequest.fetchData();
  }, []);

  useEffect(() => {
    if (getAllNotDeliveredOrdersRequest.data) {
      const customTableData = transformDataToTableData(getAllNotDeliveredOrdersRequest.data);
      setTableData(customTableData);
    }
  }, [getAllNotDeliveredOrdersRequest.data]);

  const transformDataToTableData = (data: Order[]): AppTableProps["tableData"] => {
    return [
      {
        head: "Order Id",
        children: data.map((order) => ({ cellText: order.id })),
      },
      {
        head: "Status",
        children: data.map((order) => ({ cellText: order.status })),
      },
      {
        head: "Location",
        children: data.map((order) => ({
          cellText: `Lat: ${order.location.x}, Lon: ${order.location.y}`,
        })),
      },
      {
        head: "Customer Phone",
        children: data.map((order) => ({ cellText: order.customerPhone })),
      },
      {
        head: "Customer Name",
        children: data.map((order) => ({ cellText: order.customerName })),
      },
      {
        head: "Order Items",
        children: data.map((order) => ({
          cellText: order.orderItems.map((item) => `${item.title} (${item.type}) - $${item.price.toFixed(2)}`).join(", "),
        })),
      },
    ];
  };

  return (
    <StyledOrderPageWrapper>
      {" "}
      {tableData ? (
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
