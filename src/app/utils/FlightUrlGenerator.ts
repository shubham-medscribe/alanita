function generateFlightURL(
    segments: { departure: string; destination: string; departDate: string; time?: string }[],
    options?: {
      adults?: number;
      children?: number;
      infantsLap?: number;
      infantsSeat?: number;
      directFlight?: boolean;
      refundable?: boolean;
      airlines?: number[];
      economyClass?: boolean;
      flexibleDates?: boolean;
      nearbyAirports?: boolean;
      noPenalties?: boolean;
    }
  ): string {
    const baseUrl = "https://air.alanitatravel.com/web/air/default.aspx";
    let params = `siid=99316&AirSegCount=${segments.length}&aCount=${options?.adults || 1}`;
  
    if (options?.children) params += `&cCount=${options.children}`;
    if (options?.infantsLap) params += `&iLCount=${options.infantsLap}`;
    if (options?.infantsSeat) params += `&iSCount=${options.infantsSeat}`;
    if (options?.directFlight) params += `&DirectFlight=1`;
    if (options?.refundable) params += `&Refundable=1`;
    if (options?.airlines) params += `&Airline=${options.airlines.join(",")}`;
    if (options?.economyClass) params += `&Class=Economy`;
  
    segments.forEach((segment, index) => {
      let segmentParams = `${segment.departure}|${segment.destination}|${segment.departDate}`;
      let arr = ['|', '', '|', '', '|', '', '|', '', '|', '', '|', '', '|', '', '|', ''];
  
      if (segment?.time) {
        arr[1] = segment.time;
      }
      if (options?.nearbyAirports) {
        arr[3] = '80';
        arr[5] = '80';
      }
      if (options?.flexibleDates) {
        arr[7] = '1';
        arr[9] = '1';
      }
  
      params += `&AirSeg_${index + 1}=${segmentParams}${arr.join("")}`;
    });
  
    return `${baseUrl}?${params}`;
  }
  
  // Example Usage
  const url = generateFlightURL(
    [
      { departure: "BOM", destination: "DEL", departDate: "03/18/2025", time: "mo" },
      { departure: "DEL", destination: "NYC", departDate: "03/20/2025", time: "ev" }
    ],
    {
      adults: 1,
      directFlight: true,
      refundable: true,
    }
  );

  export default generateFlightURL;
  
  console.log("Generated URL:", url);
  