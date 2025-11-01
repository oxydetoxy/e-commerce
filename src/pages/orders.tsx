import { useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import type { ReactElement } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

interface DataType {
  _id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
  action: ReactElement;
}

const columns: ColumnDef<DataType>[] = [
  {
    header: "Order ID",
    accessorKey: "_id",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    header: "Discount",
    accessorKey: "discount",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: (info) => info.getValue(),
  },
];

const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "1",
      quantity: 1,
      discount: 100,
      amount: 1000,
      status: "Pending",
      action: <Link to="/orders/1">View</Link>,
    },
    {
      _id: "2",
      quantity: 2,
      discount: 200,
      amount: 2000,
      status: "Shipped",
      action: <Link to="/orders/2">View</Link>,
    },
  ]);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();

  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
