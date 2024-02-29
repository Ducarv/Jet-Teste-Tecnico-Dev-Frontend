import React from "react";
import { ActionsCell } from "./ActionsCell";
import { RatingCell } from "./RatingCell";
import { StatusCell } from "./StatusCell";
import { CarTableProps } from "../types";
import Image from "next/image";
import { NextReservationCell } from "./NextReservationCell";

export const CarTable: React.FC<CarTableProps> = ({ data }) => {
  return (
    <div className="w-full md:w-130">
      <div className="hidden md:block">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Car
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Next Reservation
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rating
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.photo}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  <NextReservationCell date={item.nextReservation}/>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusCell status={item.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <RatingCell rating={item.rating} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ActionsCell />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
