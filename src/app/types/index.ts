export interface Car {
    id: number;
    name: string;
    photo: string;
    nextReservation: Date;
    status: string;
    rating: number;
}
  
export interface CarTableProps {
    data: Car[];
}

export interface StatusCellProps {
    status: string;
}

export interface RatingCellProps {
    rating: number;
};

export interface NextReservationCellProps {
    date: Date
};

export enum Status {
    Available = "available",
    Unavailable = "unavailable"
}