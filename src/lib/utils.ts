export function isInViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= 0 && // Top of section has reached or passed the top of the viewport
    rect.bottom >= 0 // Bottom of section is still within or past the bottom of the viewport
  );
}
