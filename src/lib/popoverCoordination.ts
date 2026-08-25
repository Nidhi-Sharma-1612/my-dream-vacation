// Lets independent Dropdown/DatePicker instances close each other when one
// opens, so a form with several popovers never shows two open at once.
const OPEN_EVENT = "popover:open";

export function announceOpen(id: string) {
  window.dispatchEvent(new CustomEvent<{ id: string }>(OPEN_EVENT, { detail: { id } }));
}

export function onOtherOpen(id: string, callback: () => void) {
  function handler(e: Event) {
    const detail = (e as CustomEvent<{ id: string }>).detail;
    if (detail.id !== id) callback();
  }
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}
