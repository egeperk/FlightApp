import { ViewStyle } from "react-native";
import { Location } from "../constants/dummy";

export interface ISvgIcon {
    opacity?: number,
    size?: number;
    color?: string;
    style?: ViewStyle;
    onClick?: () => void;
  }

  export enum DATA_TYPE {
    DEPARTURE,
    DESTINATION,
    PASSENGER
  }

  export enum TRAVEL {
    ONE_WAY,
    ROUND
  }


  export enum DELETE {
    ALL,
    SINGLE
  }

  export interface ISearchData {
    departureLocation: string,
    destinationLocation?: string,
    departureDate: string,
    returnDate?: string,
    price?: string,
    passenger: number
  }

  export interface IHistory {
    input: string
  }