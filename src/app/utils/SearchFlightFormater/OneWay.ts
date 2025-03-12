interface FormData {
  from: string;
  to: string;
  date: Date | null;
  time?: string;
  flexibleDates?: boolean;
  directFlights?: boolean;
  faresWithNoPenalties?: boolean;
  nearbyAirports?: boolean;
  lapInfant: number;
  seatInfant: number;
  adultCount: number;
  childCount: number;
  classCabin?: string;
  preferredAirline1?: string;
  preferredAirline2?: string;
}

function formatFormDataToSegments(formData: FormData) {
    return {
      departure: formData.from,
      destination: formData.to,
      departDate: formData.date
        ? `${(formData.date.getMonth() + 1).toString().padStart(2, '0')}/${formData.date.getDate().toString().padStart(2, '0')}/${formData.date.getFullYear()}`
        : '',
      time: formData.time,
    };
  }

function formatFormDataToOptions(formData: FormData) {
    const options: Record<string, any> = {};
  
    if (formData.adultCount) options.adultCount = formData.adultCount;
    if (formData.childCount) options.childCount = formData.childCount;
    if (formData.lapInfant) options.lapInfant = formData.lapInfant;
    if (formData.seatInfant) options.seatInfant = formData.seatInfant;
    if (formData.directFlights) options.directFlights = formData.directFlights;
    if (formData.faresWithNoPenalties) options.faresWithNoPenalties = formData.faresWithNoPenalties;
  
    const preferredAirlines = [
      formData.preferredAirline1 ? parseInt(formData.preferredAirline1) : undefined,
      formData.preferredAirline2 ? parseInt(formData.preferredAirline2) : undefined,
    ].filter(Boolean) as number[];
  
    if (preferredAirlines.length) options.preferredAirlines = preferredAirlines;
  
    if (formData.classCabin === 'Economy') options.classCabin = 'Economy';
    if (formData.flexibleDates) options.flexibleDates = formData.flexibleDates;
    if (formData.nearbyAirports) options.nearbyAirports = formData.nearbyAirports;
  
    return options;
  }

const formatFormDataOneWay = (formData: FormData) => {
  const segments = formatFormDataToSegments(formData);
  const options = formatFormDataToOptions(formData);
  return { segments, options };
};

export default formatFormDataOneWay;