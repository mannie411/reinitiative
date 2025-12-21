import { useState } from "react";
import { DateTimeSelector } from "./DateTimeSelector";
import { BookingForm } from "./BookingForm";

type FlowStep = "datetime" | "form";

interface SchedulingFlowProps {
  onClose: () => void;
}

export function SchedulingFlow({ onClose }: SchedulingFlowProps) {
  const [step, setStep] = useState<FlowStep>("datetime");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("form");
  };

  const handleBack = () => {
    if (step === "form") {
      setStep("datetime");
      setSelectedTime(undefined);
    } else {
      onClose();
    }
  };

  return (
    <div
      className="bg-white rounded-[10px] overflow-hidden shadow-[0px_43px_40px_2px_rgba(83,98,126,0.05)] 
    border border-[rgba(160,171,192,0.3)] "
    >
      {step === "datetime" ? (
        <DateTimeSelector
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          onTimeSelect={handleTimeSelect}
          onBack={handleBack}
        />
      ) : (
        <BookingForm
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onBack={handleBack}
          onSubmit={(data) => {
            console.log("Booking submitted:", data);
            onClose();
          }}
        />
      )}
    </div>
  );
}
