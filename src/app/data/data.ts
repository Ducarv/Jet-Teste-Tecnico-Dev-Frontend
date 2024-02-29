import { Car, Status } from "../types";

export const data: Car[] = [
    { id: 1, name: "Carro 1", photo: "/image.jpg", nextReservation: new Date(), status: Status.Available, rating: 4 },
    { id: 2, name: "Carro 2", photo: "/image.jpg", nextReservation: new Date(), status: Status.Unavailable, rating: 5 },
    { id: 3, name: "Carro 3", photo: "/image.jpg", nextReservation: new Date(), status: Status.Available, rating: 5 },
    { id: 4, name: "Carro 4", photo: "/image.jpg", nextReservation: new Date(), status: Status.Unavailable, rating: 3 },
    { id: 5, name: "Carro 5", photo: "/image.jpg", nextReservation: new Date(), status: Status.Available, rating: 1 },
    { id: 6, name: "Carro 6", photo: "/image.jpg", nextReservation: new Date(), status: Status.Unavailable, rating: 2 },
];