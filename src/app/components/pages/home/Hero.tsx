import { PlaceholderVideo } from "../../blocks/Placeholder";

export function Hero() {
  return (
    <div
      className="bg-[#2d3648] h-[1025px] relative shrink-0 w-full overflow-hidden -mt-[100px]"
      data-name="Hero"
    >
      <div
        className="absolute h-[935px] overflow-clip top-[90px] w-full max-w-[1440px] left-1/2 -translate-x-1/2"
        data-name="Hero"
      >
        <PlaceholderVideo />
      </div>
    </div>
  );
}
