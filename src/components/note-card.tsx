import * as Dialog from "@radix-ui/react-dialog";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative flex flex-col gap-3 p-5 overflow-hidden text-left rounded-md outline-none bg-slate-800 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {note.date.toISOString()}
        </span>

        <p className="text-sm leading-6 text-slate-400 ">{note.content}</p>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="z-10 absolute">oi</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
