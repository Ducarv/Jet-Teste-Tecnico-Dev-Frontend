import React from "react";

interface StatusCellProps {
  status: string;
}

export const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
    const bgColorClass = status.toLowerCase() === "available" ? "bg-green-100" : "bg-red-100";
    const textColorClass = status.toLowerCase() === "available" ? "text-green-800" : "text-red-800";
  
    return (
      <div className={`px-2 py-1 rounded-full ${bgColorClass} ${textColorClass} text-center text-sm inline-block min-w-min`}>
        {status}
      </div>
    );
};
