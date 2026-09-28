"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
};

export default function Modal({ open, onClose, label, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={dialogRef} aria-label={label} onClose={onClose} onClick={(event) => { if (event.target === dialogRef.current) onClose(); }} className="m-auto max-h-[90vh] w-[min(92vw,32rem)] overflow-y-auto rounded-2xl bg-off-white p-0 text-charcoal backdrop:bg-black/60">
      <div className="flex flex-col gap-5 p-6">
        <button type="button" onClick={onClose} aria-label="إغلاق" className="self-end rounded-full border border-charcoal/30 px-3 py-1 text-sm">✕</button>
        {children}
      </div>
    </dialog>
  );
}