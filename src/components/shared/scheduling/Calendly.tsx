import { Fragment } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });
  return (
    <Fragment>
      <InlineWidget
        className="content-stretch size-full"
        url="https://calendly.com/bookings-thereinitiative/30min?hide_gdpr_banner=1"
        styles={{
          minHeight: "700px",
          maxWidth: "1440px",
          marginInline: "auto",
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
        utm={{
          utmCampaign: "Spring Sale 2019",
          utmContent: "Shoe and Shirts",
          utmMedium: "Ad",
          utmSource: "Facebook",
          utmTerm: "Spring",
        }}
      />
    </Fragment>
  );
};

export default Calendly;
