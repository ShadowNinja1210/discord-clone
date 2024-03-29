"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(1, { message: "Server name is required." }),
  imageUrl: z.string().min(1, { message: "" }).url({ message: "Image URL is invalid." }),
});

export const InitialModal = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-center text-2xl font-bold">Customize your server</DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            <p>Give your server a personality with a name and an image. You can always change it later.</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
