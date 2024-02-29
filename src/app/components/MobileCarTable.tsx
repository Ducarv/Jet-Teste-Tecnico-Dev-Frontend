import { CarTableProps } from "../types"
import { ActionsCell } from "./ActionsCell"
import { RatingCell } from "./RatingCell"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";
import { NextReservationCell } from "./NextReservationCell";

export const MobileCarTable: React.FC<CarTableProps> = ({ data }) => {
    return (
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
                    Next reservation: <NextReservationCell date={item.nextReservation}/>
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
    );
};