"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "./ui/separator";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CircleCheck } from "lucide-react";
import { useState } from "react";

const MultiSelectDialog = ({
  items,
  inputText = "Type a command or search...",
  title = "Select users",
  description = "Select the users you want to invite to the party.",
  emptyMessage = "No results found.",
  maxVisibleItems = 4,
  buttonText = "Continue",
  visibleItemsText = "Select users to add to this thread",
  children,
}: {
  items: { name: string; email: string }[];
  inputText?: string;
  title?: string;
  description?: string;
  emptyMessage?: string;
  maxVisibleItems?: number;
  buttonText?: string;
  visibleItemsText?: string;
  children: React.ReactNode;
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{children}</Button>
      </DialogTrigger>

      <DialogContent className="p-0 gap-0">
        <DialogHeader className="p-4 pt-5">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <Separator />

        <Command className="w-full">
          <CommandInput placeholder={inputText} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup className="p-2">
              {items.map((item) => (
                <CommandItem key={item.name}>
                  <div
                    className="flex items-center justify-between w-full"
                    onClick={() => handleSelect(item.name)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-muted rounded-full size-9 flex items-center justify-center">
                        <span className="font-medium">
                          {item.name.split(" ").map((word) => word[0])}
                        </span>
                      </div>
                      <div>
                        <p>{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.email}
                        </p>
                      </div>
                    </div>

                    {selectedItems.includes(item.name) && (
                      <CircleCheck className="size-6" />
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>

        <Separator className="mt-2" />

        <div className="p-4 flex items-center justify-between">
          <div>
            {selectedItems.length > 0 ? (
              <div className="flex -space-x-2">
                {selectedItems.slice(0, maxVisibleItems).map((item, index) => (
                  <div
                    key={index}
                    className="bg-muted rounded-full size-9 flex items-center justify-center border border-primary/10"
                  >
                    <span className="font-medium">
                      {item.split(" ").map((word) => word[0])}
                    </span>
                  </div>
                ))}

                {selectedItems.length > maxVisibleItems && (
                  <div className="bg-muted rounded-full size-9 flex items-center justify-center border border-primary/10">
                    <span className="font-medium">
                      +{selectedItems.length - maxVisibleItems}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">
                {visibleItemsText}
              </span>
            )}
          </div>

          <Button>{buttonText}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MultiSelectDialog;
