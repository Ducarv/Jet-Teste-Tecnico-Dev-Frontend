import React from "react";
import { Status, StatusCellProps } from "../types/index"

export const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
    const bgColorClass = status.toLowerCase() === Status.Available ? "bg-green-100" : "bg-red-100";
    const textColorClass = status.toLowerCase() === Status.Available ? "text-green-800" : "text-red-800";
  
    return (
      <div className={`px-2 py-1 rounded-full ${bgColorClass} ${textColorClass} text-center text-sm inline-block min-w-min`}>
        {status}
      </div>
    );
};
