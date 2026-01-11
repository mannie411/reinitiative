import { useMemo, useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  getDay,
  isAfter,
  // isBefore,
  startOfDay,
} from "date-fns";
import svgPaths from "@/assets/svg";
import { Button } from "@/components/ui";
import { ChevronDown, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { cn } from "@/components/ui/utils";
import { AnimatePresence, motion } from "motion/react";

interface DateTimeSelectorProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
  onBack: () => void;
}

// Available time slots
const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

export function DateTimeSelector({
  selectedDate,
  onDateSelect,
  onTimeSelect,
  onBack,
}: DateTimeSelectorProps) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [currentMonth, setCurrentMonth] = useState(today);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // Calculate which day of the week the month starts on
  const firstDayOfMonth = getDay(startOfMonth(currentMonth));

  // Create array for calendar grid (7 columns)
  const calendarDays = [
    ...Array.from({ length: firstDayOfMonth }, () => null),
    ...daysInMonth,
  ];

  const isAtMinMonth = isSameMonth(currentMonth, today);

  const handlePrevMonth = () => {
    if (!isAtMinMonth) {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
  };

  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Check if date is available (not in the past, and not a weekend for this example)
  const isDateAvailable = (date: Date) => {
    const day = getDay(date);
    const today = startOfDay(new Date());
    return isAfter(date, today) && day !== 0 && day !== 6; // Not Sunday(0) or Saturday(6)
  };

  return (
    <motion.div className="relative w-full flex flex-col md:flex-row max-h-[85vh] max-sm:overflow-y-auto">
      {/* Left Panel - Description */}
      <div
        className="bg-[#394E79] w-full max-sm:w-[320px]  md:w-[330px] flex flex-col 
       p-[20px] md:p-[40px] gap-[85px] overflow-y-auto"
      >
        <div className="w-full">
          <button
            onClick={onBack}
            className="flex gap-[12px] items-center text-white hover:opacity-80
             transition-opacity font-gt-super-ds"
          >
            <div className="size-[24px] flex items-center justify-center">
              <svg
                className="block size-full rotate-[270deg]"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
              >
                <path d={svgPaths.p3c144b80} fill="white" />
              </svg>
            </div>
            <span className=" text-[15px] tracking-[-0.3px]">
              Back to website
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-[42px]">
          <div className="flex flex-col gap-[16px]">
            <p className="font-gt-super-ds text-[24px] tracking-[4.8px] uppercase text-white">
              RE:INITIATIVE
            </p>
            <div className="flex gap-[6px] items-center">
              <div className="size-[16px]">
                <svg
                  className="block size-full"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path d={svgPaths.p39ee6532} stroke="white" />
                  <path
                    d="M8 5.33333V8L9.33333 9.33333"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-eb-garamond text-[14px] text-white">20 min</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="mb-4 text-white">
              Book a free 20-min Google Meet call to learn more about the
              Re:Initiative and get any of your questions answered.
            </p>
            <p className="text-white">
              <span className="font-bold ">Important:</span>
              {` Ensure you select the correct AM/PM time to avoid mistakes, like 3am instead of 3pm.`}
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Date & Time Selection */}
      <div
        className="bg-white max-sm:w-[320px] w-[750px] px-[20px] md:px-[40px] 
        py-[32px] flex flex-col border-l border-[#edeff2] overflow-y-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-[24px]">
          <div className="w-full max-w-[400px]">
            <div className="w-full">
              <p className="font-gt-super-ds text-[22px] tracking-[-0.44px] text-[#2d3648]">
                Select a Date & Time
              </p>
            </div>
            {/* Calendar */}
            <div className="bg-white flex flex-col gap-[24px] max-w-[400px]">
              {/* Month Navigation */}
              <div className="flex gap-[64px] items-center justify-center">
                <Button
                  variant="ghost"
                  onClick={handlePrevMonth}
                  disabled={isAtMinMonth} // Disable UI
                  className={isAtMinMonth ? "opacity-30" : ""}
                >
                  <ChevronLeft />
                </Button>

                <p
                  className="font-gt-super-ds text-[18px] tracking-[-0.44px] text-[#2d3648] 
              text-center w-full  md:min-w-[180px]"
                >
                  {format(currentMonth, "MMMM yyyy")}
                </p>

                <Button variant={"ghost"} onClick={handleNextMonth}>
                  <ChevronRight />
                </Button>
              </div>

              {/* Calendar Grid */}
              <div className="flex flex-col gap-[16px] md:gap-[24px]">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-[12px] md:gap-[16px]">
                  {["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"].map(
                    (day) => (
                      <p
                        key={day}
                        className="text-center font-avenir-lt text-[8px] md:text-[14px] 
                      tracking-[2.8px] text-[#2d3648] uppercase"
                      >
                        {day}
                      </p>
                    )
                  )}
                </div>

                {/* Dates */}
                <div className="grid grid-cols-7 gap-x-[16px] gap-y-[8px]">
                  {calendarDays.map((date, index) => {
                    if (!date) {
                      return (
                        <div key={`empty-${index}`} className="size-[32px]" />
                      );
                    }

                    const isAvailable = isDateAvailable(date);
                    const isSelected =
                      selectedDate && isSameDay(date, selectedDate);
                    // const isCurrentMonth = isSameMonth(date, currentMonth);

                    return (
                      <button
                        key={index}
                        onClick={() => isAvailable && onDateSelect(date)}
                        disabled={!isAvailable}
                        className={cn(
                          `size-[32px] md:size-[38px] rounded-full flex items-center justify-center
                      font-inter text-[14px] uppercase transition-colors not-italic`,
                          isSelected ? "bg-[#394e79] text-white" : "",
                          !isSelected && isAvailable
                            ? "bg-[#edeff2] text-[#2d3648] hover:bg-[#dde0e5]"
                            : "",
                          !isAvailable
                            ? "text-[#a0abc0] cursor-not-allowed"
                            : "cursor-pointer"
                        )}
                      >
                        {format(date, "d")}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Time Zone */}
            <div className="flex flex-col mt-4">
              <div className="flex gap-[8px] items-center">
                <div className="size-[18px]">
                  <Globe color="#2D3648" className="size-[18px]" />
                </div>
                <p className="font-gt-super-ds text-[12px] tracking-[-0.32px] text-[#2d3648]">
                  Time zone
                </p>
              </div>

              <div className="flex flex-col gap-[10px]">
                <div className="border-b border-[#a0abc0] pb-[12px]">
                  <p className="font-gt-super-ds text-[16px] text-[#53627e]">
                    Europe/London (GMT+0/+1)
                  </p>
                </div>
                <p className="font-eb-garamond text-[12px] text-[#465776]">
                  All times are shown in your selected time zone
                </p>
              </div>
            </div>
          </div>

          {/* Available Times - Show when date is selected */}
          <AnimatePresence mode="wait">
            {selectedDate && (
              <motion.div
                key="time-selector"
                initial={{ opacity: 0, x: -50, width: 0 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  width: window.innerWidth > 768 ? "30%" : "100%",
                }}
                exit={{ opacity: 0, x: -50, width: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 200 }}
                className="flex flex-col gap-[16px] border-t border-[#edeff2]"
              >
                <div className="min-w-[200px] flex flex-col gap-[16px]">
                  <p className="font-gt-super-ds text-[16px] text-[#2d3648]">
                    Select a date to see available times.
                  </p>

                  <div className="grid grid-cols-3 md:flex md:flex-col gap-[12px] max-h-[400px] overflow-y-scroll">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => onTimeSelect(time)}
                        className="bg-[#edeff2] hover:bg-[#394e79] hover:text-white transition-colors
                     px-[16px] py-[12px] rounded-[4px] font-eb-garamond text-[16px] text-[#2d3648]"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <div className="hidden justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
