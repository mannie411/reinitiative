# Scheduling Component

A complete booking/scheduling system built with React, featuring a multi-step flow with calendar selection, time slot picking, and a comprehensive booking form.

## Features

- **Interactive Calendar**: Month navigation with date selection
- **Available Time Slots**: Displays available times when a date is selected
- **Multi-step Flow**: Seamless transition from date/time selection to booking form
- **Form Validation**: Built-in validation for required fields
- **Responsive Design**: Matches Figma design specifications exactly
- **Modal Integration**: Uses Radix UI Dialog for accessible modal functionality

## Components

### SchedulingModal
The main modal wrapper component.

```tsx
import { SchedulingModal } from './components/scheduling';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Book Meeting</button>
      <SchedulingModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
```

### SchedulingFlow
Manages the state transitions between date/time selection and form submission.

### DateTimeSelector
Handles calendar display, month navigation, and time slot selection.

### BookingForm
Comprehensive form with multiple sections for collecting user information.

## Flow

1. **Select Date**: User chooses a date from the calendar (only future weekdays shown as available)
2. **Choose Time**: Available time slots are displayed
3. **Fill Form**: User enters their details and booking information
4. **Submit**: Form data is validated and submitted

## Dependencies

- `date-fns` - Date manipulation and formatting
- `@radix-ui/react-dialog` - Accessible modal/dialog
- `react` - Core framework

## Customization

### Time Slots
Edit the `TIME_SLOTS` array in `DateTimeSelector.tsx`:

```tsx
const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', // ... add your times
];
```

### Date Availability
Modify the `isDateAvailable` function in `DateTimeSelector.tsx`:

```tsx
const isDateAvailable = (date: Date) => {
  // Your custom logic here
  return true; // or false
};
```

### Form Submission
Handle the form data in the parent component:

```tsx
<SchedulingFlow 
  onClose={() => setIsOpen(false)}
  onSubmit={(data) => {
    console.log('Booking data:', data);
    // Send to your API
  }}
/>
```

## Styling

All components use Tailwind CSS with custom font families matching the Figma design:
- `GT Super Ds Trial` - Headings
- `EB Garamond` - Body text
- `Avenir LT Pro` - Labels and UI text

## Integration Example

The scheduling modal is integrated into the Hero component's "ENQUIRE" button on the homepage, providing a seamless booking experience for users.
