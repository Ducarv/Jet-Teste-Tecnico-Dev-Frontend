import React from "react";
import { ActionsCell } from "./ActionsCell";
import { RatingCell } from "./RatingCell";
import { StatusCell } from "./StatusCell";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";

interface Car {
  id: number;
  name: string;
  photo: string;
  nextReservation: string;
  status: string;
  rating: number;
}

interface CarTableProps {
  data: Car[];
}

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
                  {item.nextReservation}
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

      <div className="block md:hidden flex flex-wrap justify-center items-start h-screen">
        <div className="mt-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow overflow-hidden mb-1 sm:rounded-lg w-80 max-w-screen-sm p-2 relative"
            >
              <div className="flex items-center">
                <div className="relative">
                  {item.status === "available" ? (
                    <CheckCircleIcon className="absolute top-0 left-0 text-green-500 m-2 h-8 w-8" />
                  ) : (
                    <CancelIcon className="absolute top-0 left-0 text-red-500 m-2 h-8 w-8" />
                  )}

                  <Image
                    src={item.photo}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded mr-4"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold leading-6 text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Next reservation: {item.nextReservation}
                  </p>
                  <span>
                    <RatingCell rating={item.rating}/>
                  </span>
                </div>
                <div className="absolute top-0 right-0 mt-2 mr-2">
                  <ActionsCell />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
