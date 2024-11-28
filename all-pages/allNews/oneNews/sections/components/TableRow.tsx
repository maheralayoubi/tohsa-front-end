import React, { ReactNode } from "react";

interface ITableRow {
    rowTitle: string,
    rowContent?: string,
    children?: ReactNode
}

const TableRow: React.FC<ITableRow> = ({ rowTitle, rowContent, children }) => {
    return (
        <tr className="flex flex-col lg:table-row">
            <td className="border-b-0 border border-[#878787] p-4 lg:p-5 text-sm lg:text-2xl font-bold w-full lg:w-52 ">{rowTitle}</td>
            <td className="border-t-0 border border-[#878787] p-4 lg:p-5">{children || rowContent}</td>
        </tr>
    )
};

export default TableRow;
