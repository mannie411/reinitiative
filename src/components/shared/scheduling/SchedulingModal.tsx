import { Fragment } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { SchedulingFlow } from "./SchedulingFlow";

interface SchedulingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SchedulingModal({ open, onOpenChange }: SchedulingModalProps) {
  return (
    <Fragment>
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 focus:outline-none">
            <VisuallyHidden.Root>
              <Dialog.Title>Schedule a Meeting</Dialog.Title>
              <Dialog.Description>
                Book a free 20-minute Google Meet call to learn more about the
                Re:Initiative
              </Dialog.Description>
            </VisuallyHidden.Root>
            <SchedulingFlow onClose={() => onOpenChange(false)} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  );
}
