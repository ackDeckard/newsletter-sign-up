import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";

type SuccessProps = {
  openModal: boolean;
  handleModal: () => void;
  email: string;
};

export function SuccessDialog({ openModal, handleModal, email }: SuccessProps) {
  if (email.length > 40) {
    email = email.substring(0, 40) + "..";
  }

  return (
    <Dialog open={openModal}>
      <DialogContent className="h-auto w-[90%] rounded-lg px-4 py-10 md:p-7 lg:p-11">
        <div className="grid gap-4 py-4">
          <Label className="relative w-11/12 text-left text-[40px] leading-none">
            Thanks for subscribing!
            <div className="absolute right-0 top-0 animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <defs>
                  <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color="#AFE1AF" />
                    <stop offset="100%" stop-color="#088F8F" />
                  </linearGradient>
                </defs>
                <g fill="none">
                  <circle cx="32" cy="32" r="32" fill="url(#a)" />
                  <path
                    stroke="#FFF"
                    stroke-width="4"
                    d="m18.286 34.686 8.334 7.98 19.094-18.285"
                  />
                </g>
              </svg>
            </div>
          </Label>
          <Label className="text-left">
            A confirmation email has been sent to{" "}
            <span className="max-w-sm truncate font-bold">{email}</span>. Please
            open it and click the button inside to confirm your subscription
          </Label>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleModal}
            className="w-full hover:bg-gradient-to-b hover:from-topGradient hover:to-bottomGradient"
          >
            Dismiss message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
