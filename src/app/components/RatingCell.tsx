import React from "react"

interface RatingCellProps {
    rating: number;
};

export const RatingCell: React.FC<RatingCellProps> = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
        <span key={index} className="text-2xl">
            ★
        </span>
    ));

    return <div>{stars}</div>
}

