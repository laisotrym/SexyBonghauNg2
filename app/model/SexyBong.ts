//Data Transfer onject (DTO)
//without any logic
import {SexyMetric} from "./SexyMetric";

export interface SexyBong {
    id: number;
    name: string;
    info: string;
    metrics: SexyMetric; //has-a
    catse: number;
    codeNr: string;
    loveNr: number;
    avatarUrl: string;
    imageUrl: string
}

