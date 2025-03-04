import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDatePicker({
  onDate,
}: {
  onDate?: (date: Date | null) => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const datepickerRef = useRef<DatePicker | null>(null); // Correct type

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Consider <768px as mobile
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="relative w-full"
      onClick={() => !isMobile && datepickerRef.current?.setFocus()} // Open on click for large screens
    >
      <DatePicker
        ref={datepickerRef} // Assign ref to DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          if (onDate) {
            onDate(date);
          }
        }}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY"
        className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px] text-black"
        popperPlacement="bottom-start"
        withPortal={isMobile} // Enable portal only for mobile
      />
    </div>
  );
}
