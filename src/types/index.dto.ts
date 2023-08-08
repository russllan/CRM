export interface CarsType {
    [x: string]: any;
    id?: number,
    brand: string,
    model: string,
    license_plate: string,
    vehicle_type: string,
    image1?: string,
    image2?: string | null,
    image3?: string | null,
    image4?: string | null,
    image5?: string | null,
    image6?: string | null,
    passport_image?: string,
    year_production: number,
    color: string,
    last_checking: string,
    price_by_day: string,
    is_busy: boolean,
    top: boolean
}

export interface AuthType {
    username: string,
    password: string
}