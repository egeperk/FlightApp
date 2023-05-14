export interface IDate {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  }
  
  export interface IDatePickerProps {
    onDepartureSelected?: (departure: string) => void,
    onReturnSelected?: (returnDate: string) => void
  }