import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TableRow } from "../TransactionTable/TransactionTable.styled";

const TableSkeleton = ({ rows = 5 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <TableRow key={index}>
          <td style={{ padding: "12px 24px" }}>
            <Skeleton height={20} />
          </td>
          <td style={{ padding: "12px 20px" }}>
            <Skeleton height={20} />
          </td>
          <td style={{ padding: "12px 20px" }}>
            <Skeleton height={20} />
          </td>
          <td style={{ padding: "12px 20px" }}>
            <Skeleton height={20} />
          </td>
          <td style={{ padding: "12px 24px" }}>
            <Skeleton height={20} width={20} />
          </td>
        </TableRow>
      ))}
    </>
  );
};

export default TableSkeleton;
