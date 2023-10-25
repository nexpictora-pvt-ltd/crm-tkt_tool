export interface Service {
    service_id: number;
    service_name: string;
    service_price: number;
    service_image: string;
  }
  
  export type ServiceState = {
    readonly services: Service[] | [];
    readonly selectedService: Service | null;
    readonly isLoading: boolean | false;
    readonly error: {} | null;
  };
  
  const INITIAL_STATE: ServiceState = {
    services: [],
    selectedService: null,
    isLoading: false,
    error: null,
  };
  
  export default INITIAL_STATE;
  
