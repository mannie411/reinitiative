import { useState } from "react";
import { format } from "date-fns";
import svgPaths from "@/assets/svg";

interface BookingFormProps {
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  onBack: () => void;
  onSubmit: (data: BookingData) => void;
}

interface BookingData {
  name: string;
  email: string;
  website: string;
  timeConfirmed: boolean;
  reason: string;
  brandDescription: string;
  priority: string[];
  businessStage: string[];
  budget: string[];
}

export function BookingForm({
  selectedDate,
  selectedTime,
  onBack,
  onSubmit,
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    website: "",
    timeConfirmed: false,
    reason: "",
    brandDescription: "",
    priority: [],
    businessStage: [],
    budget: [],
  });

  const [wordCount, setWordCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCheckboxChange = (
    field: "priority" | "businessStage" | "budget",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleBrandDescriptionChange = (value: string) => {
    const words = value.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
    setFormData((prev) => ({ ...prev, brandDescription: value }));
  };

  return (
    <div className="relative flex flex-col md:flex-row  max-h-[85vh]">
      {/* Left Panel - Description */}
      <div className="bg-[#2d3648] w-[330px] flex flex-col gap-[24px] p-[20px] md:p-[40px] overflow-y-auto">
        <div className="flex flex-col gap-[24px] ">
          <button
            onClick={onBack}
            className="flex gap-[5px] items-center  hover:opacity-80 transition-opacity"
          >
            <div className="size-[24px] flex items-center justify-center">
              <svg
                className="block size-full rotate-[270deg]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d={svgPaths.p3c144b80} fill="#FFFFFF" />
              </svg>
            </div>
            <p className="font-gt-super-ds text-[15px] text-white tracking-[-0.3px]">
              Back to website
            </p>
          </button>

          <div className="flex flex-col gap-[40px] max-sm:mt-12">
            <div className="flex flex-col gap-[14px]">
              <p className="font-gt-super-ds text-[24px] tracking-[4.8px] uppercase text-white">
                RE:INITIATIVE
              </p>
              <div className="flex gap-[6px] items-center">
                <div className="size-[14px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path d={svgPaths.p39ee6532} stroke="#FFFFFF" />
                    <path
                      d="M8 5.33333V8L9.33333 9.33333"
                      stroke="#FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[14px] text-white">20 min</p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-white">
                Book a free 20-min Google Meet call to learn more about the
                Re:Initiative and get any of your questions answered.
              </p>
              <p className="text-white">
                <span className=" font-bold">Important:</span>
                Ensure you select the correct AM/PM time to avoid mistakes, like
                3am instead of 3pm.
              </p>
            </div>
          </div>
        </div>

        {/* Selected Date/Time Box */}
        <div className="border border-[rgba(160,171,192,0.5)] rounded-[4px] px-[24px] py-[18px]">
          <div className="flex flex-col gap-[5px] ">
            <div className="flex flex-col gap-[6px]">
              <p className="font-avenir-lt text-[10px] tracking-[1.4px] uppercase text-white">
                SELECTED DATE
              </p>
              <p className="font-eb-garamond text-[14px] text-white">
                {selectedDate
                  ? format(selectedDate, "EEEE, MMMM d")
                  : "No date selected"}
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="font-avenir-lt text-[10px] tracking-[1.4px] uppercase text-white">
                SELECTED TIME
              </p>
              <p className="font-eb-garamond text-[14px] text-white">
                {selectedTime || "No time selected"}
              </p>
            </div>
            <p className="font-avenir-lt text-[10px] tracking-[1.4px] uppercase text-white">
              EUROPE/LONDON
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div
        className="flex-1 w-full max-sm:w-[320px]  md:w-[750px] bg-white border-l 
        border-[rgba(160,171,192,0.4)]  px-[20px] md:px-[40px] py-[42px] overflow-y-auto"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-[40px]">
          {/* Enter Details Section */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-gt-super-ds text-[20px] text-[#2d3648]">
              Enter Details
            </h3>

            {/* Name */}
            <div className="flex flex-col gap-[5px]">
              <label className="font-eb-garamond text-[14px] text-[#2d3648]">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                // placeholder="Sylvia"
                className="border-b border-[#a0abc0] pb-[5px] font-gt-super-ds text-[14px] 
                text-[#2d3648] placeholder:text-[#b1bac8] focus:outline-none focus:border-[#2d3648]"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[5px]">
              <label className="font-eb-garamond text-[14px] text-[#2d3648]">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                // placeholder="name@example.com"
                className="border-b border-[#a0abc0] pb-[5px] font-gt-super-ds text-[14px] 
                text-[#2d3648] placeholder:text-[#b1bac8] focus:outline-none focus:border-[#2d3648]"
                required
              />
            </div>

            {/* Time Confirmation */}
            <div className="flex flex-col gap-[24px]">
              <div className="flex gap-[8px]">
                <p className="font-eb-garamond text-[14px] text-[#2d3648] flex-1">
                  Please confirm you've checked the time and timezone to avoid
                  selecting a night-time slot by mistake (e.g., 3 AM instead of
                  3 PM).
                </p>
                <span className="font-eb-garamond text-[14px] text-[#53627e]">
                  *
                </span>
              </div>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.timeConfirmed}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      timeConfirmed: e.target.checked,
                    }))
                  }
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                  required
                />
                <span className="font-eb-garamond text-[14px] text-[#53627e]">
                  I've checked the time and it's correct
                </span>
              </label>
            </div>

            {/* Website URL */}
            <div className="flex flex-col gap-[5px]">
              <label className="font-eb-garamond text-[14px] text-[#2d3648]">
                Website URL (or link to your socials)
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, website: e.target.value }))
                }
                // placeholder="nameofsite.com"
                className="border-b border-[#a0abc0] pb-[5px] font-gt-super-ds text-[14px] text-[#2d3648] placeholder:text-[#b1bac8] focus:outline-none focus:border-[#2d3648]"
              />
            </div>
          </div>

          {/* Business Information Section */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-gt-super-ds text-[20px] text-[#2d3648]">
              Business Information
            </h3>

            {/* Reason for Call */}
            <div className="flex flex-col gap-[5px]">
              <label className="font-eb-garamond text-[14px] text-[#2d3648]">
                Why are you interested in a call? *
              </label>
              <input
                type="text"
                value={formData.reason}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, reason: e.target.value }))
                }
                className="border-b border-[#a0abc0] pb-[5px] font-gt-super-ds text-[14px]
                 text-[#2d3648] placeholder:text-[#b1bac8] focus:outline-none focus:border-[#2d3648]"
                required
              />
            </div>

            {/* Brand Description */}
            <div className="flex flex-col gap-[5px]">
              <label className="font-eb-garamond text-[14px] text-[#2d3648]">
                Tell us a little about your brand. (10 words minimum) *
              </label>
              <div className="flex flex-col gap-[4px]">
                <textarea
                  value={formData.brandDescription}
                  onChange={(e) => handleBrandDescriptionChange(e.target.value)}
                  placeholder="Describe your brand, products/services, target audience, and what makes you unique..."
                  rows={3}
                  className="border-b border-[#a0abc0] pb-[24px] font-gt-super-ds text-[14px] 
                  text-[#2d3648] placeholder:text-[#b1bac8] focus:outline-none focus:border-[#2d3648] 
                  resize-none"
                  required
                />
                <p className="font-avenir-lt text-[5px] text-[#465776]">
                  {wordCount} words (minimum 10 required)
                </p>
              </div>
            </div>

            {/* Priority */}
            <div className="flex flex-col gap-[14px]">
              <p className="font-eb-garamond text-[14px] text-[#2d3648]">
                Which area best describes your current priority? *
              </p>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.priority.includes("clarity")}
                  onChange={() => handleCheckboxChange("priority", "clarity")}
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  Establishing clarity and brand identity
                </span>
              </label>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.priority.includes("growth")}
                  onChange={() => handleCheckboxChange("priority", "growth")}
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  Expanding visibility and growth
                </span>
              </label>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.priority.includes("scaling")}
                  onChange={() => handleCheckboxChange("priority", "scaling")}
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  Scaling with structure and long-term systems
                </span>
              </label>
            </div>

            {/* Business Stage */}
            <div className="flex flex-col gap-[14px]">
              <p className="font-eb-garamond text-[14px] text-[#2d3648]">
                What stage is your business at? *
              </p>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.businessStage.includes("prelaunch")}
                  onChange={() =>
                    handleCheckboxChange("businessStage", "prelaunch")
                  }
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  Idea / Pre-launch
                </span>
              </label>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.businessStage.includes("early")}
                  onChange={() =>
                    handleCheckboxChange("businessStage", "early")
                  }
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  Early-stage startup (0–2 years)
                </span>
              </label>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.businessStage.includes("growing")}
                  onChange={() =>
                    handleCheckboxChange("businessStage", "growing")
                  }
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  Growing brand (2–5 years)
                </span>
              </label>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-[14px]">
              <p className="font-eb-garamond text-[14px] text-[#2d3648]">
                Do you have a budget allocated for brand strategy and creative
                direction? *
              </p>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.budget.includes("established")}
                  onChange={() => handleCheckboxChange("budget", "established")}
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  Established business (5+ years)
                </span>
              </label>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.budget.includes("yes")}
                  onChange={() => handleCheckboxChange("budget", "yes")}
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  Yes, we have resources set aside
                </span>
              </label>
              <label className="flex gap-[8px] items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.budget.includes("exploring")}
                  onChange={() => handleCheckboxChange("budget", "exploring")}
                  className="size-[24px] rounded-[1.5px] border-[0.75px] border-[#a0abc0] cursor-pointer"
                />
                <span className="font-eb-garamond text-[14px] text-[#2d3648]">
                  We are exploring options and planning budget
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#394e79] hover:bg-[#2d3a5a] transition-colors rounded-[4px] 
            px-[24px] py-[10px] w-full"
          >
            <p className="font-eb-garamond text-[14px] tracking-[2.4px] uppercase text-white text-center">
              SCHEDULE MEETING
            </p>
          </button>
        </form>
      </div>
    </div>
  );
}
