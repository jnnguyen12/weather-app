// export interface week {
    
// }

export interface day  {
    hours: hour[];
}

export interface hour {
    temp: number;
    wind_spd: number;
    timestamp_local: string;
    wind_dir: string;
    description: string;
    uv_index: number;
    sunrise: string;
    sunset: string;
}