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
import svgPaths from "@/assets/svg/svg-0bdato82qn";
import { Button } from "@/components/ui";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="flex">
      {/* Left Panel - Description */}
      <div className="bg-[#394e79] w-[330px] flex flex-col px-[31px] py-[34px] gap-[85px]">
        <button
          onClick={onBack}
          className="flex gap-[12px] items-center text-white hover:opacity-80 transition-opacity"
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
          <p className="font-gt-super-ds text-[15px] tracking-[-0.3px]">
            Back to website
          </p>
        </button>

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

          <div className="font-eb-garamond text-[16px] text-white">
            <p className="mb-4">
              Book a free 20-min Google Meet call to learn more about the
              Re:Initiative and get any of your questions answered.
            </p>
            <p>
              <span className="font-['EB_Garamond:Bold',sans-serif] font-bold">
                Important:
              </span>
              {` Ensure you select the correct AM/PM time to avoid mistakes, like 3am instead of 3pm.`}
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Date & Time Selection */}
      <div className="bg-white w-[750px] px-[32px] py-[24px] flex flex-col md:flex-row gap-[24px] border-l border-[#edeff2]">
        <div className="w-full">
          <p className="font-gt-super-ds text-[22px] tracking-[-0.44px] text-[#2d3648]">
            Select a Date & Time
          </p>

          {/* Calendar */}
          <div className="bg-white flex flex-col gap-[32px] py-[24px]">
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

              <p className="font-gt-super-ds text-[22px] tracking-[-0.44px] text-[#2d3648] text-center min-w-[180px]">
                {format(currentMonth, "MMMM yyyy")}
              </p>

              <Button variant={"ghost"} onClick={handleNextMonth}>
                <ChevronRight />
              </Button>
            </div>

            {/* Calendar Grid */}
            <div className="flex flex-col gap-[24px]">
              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-[16px]">
                {["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"].map(
                  (day) => (
                    <div key={day} className="text-center">
                      <p className="font-avenir-lt text-[14px] tracking-[2.8px] text-[#2d3648] uppercase">
                        {day}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-7 gap-x-[16px] gap-y-[16px]">
                {calendarDays.map((date, index) => {
                  if (!date) {
                    return (
                      <div key={`empty-${index}`} className="size-[48px]" />
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
                      className={`
                      size-[48px] rounded-full flex items-center justify-center
                      font-avenir-lt text-[16px] uppercase
                      transition-colors
                      ${isSelected ? "bg-[#394e79] text-white" : ""}
                      ${!isSelected && isAvailable ? "bg-[#edeff2] text-[#2d3648] hover:bg-[#dde0e5]" : ""}
                      ${!isAvailable ? "text-[#a0abc0] cursor-not-allowed" : "cursor-pointer"}
                    `}
                    >
                      {format(date, "d")}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Time Zone */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[8px] items-center">
              <div className="size-[18px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.375 14.25V16.5"
                    stroke="#2D3648"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.875 16.5H10.875"
                    stroke="#2D3648"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.125 12C7.2255 12 4.875 9.6495 4.875 6.75C4.875 3.85051 7.2255 1.5 10.125 1.5C13.0245 1.5 15.375 3.85051 15.375 6.75C15.375 9.6495 13.0245 12 10.125 12Z"
                    stroke="#2D3648"
                    stroke-width="1.25"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6.375 3C6.86573 3.02888 7.11927 3.26924 7.55512 3.72976C8.34232 4.56155 9.12953 4.63095 9.6543 4.35369C10.4415 3.9378 9.78 3.26416 10.7039 2.89807C11.3061 2.65946 11.3901 2.0102 11.0549 1.5"
                    stroke="#2D3648"
                    stroke-width="1.25"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 7.5C13.875 7.5 13.6753 8.4351 12.75 8.25C10.875 7.875 10.3437 8.29417 10.3437 9.18832C10.3437 10.0824 10.3437 10.0824 9.95377 10.753C9.70012 11.1892 9.61147 11.6253 10.117 12"
                    stroke="#2D3648"
                    stroke-width="1.25"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.875 1.5C3.48648 2.84996 2.625 4.73115 2.625 6.81188C2.625 10.9199 5.98286 14.25 10.125 14.25C12.1691 14.25 14.0222 13.439 15.375 12.1238"
                    stroke="#2D3648"
                    stroke-width="1.25"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <p className="font-gt-super-ds text-[16px] tracking-[-0.32px] text-[#2d3648]">
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
        {selectedDate && (
          <div className="overflow-hidden">
            <div className="flex flex-col gap-[16px] border-t border-[#edeff2] pt-[24px] ">
              <p className="font-gt-super-ds text-[16px] text-[#2d3648]">
                Select a date to see available times.
              </p>
              <div className="grid grid-cols-3 md:flex md:flex-col gap-[12px] max-h-[500px] overflow-y-scroll">
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
              <div className="flex justify-center">
                <ChevronDown />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
