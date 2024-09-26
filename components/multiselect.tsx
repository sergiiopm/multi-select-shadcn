"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CircleCheck } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const MultiSelect = ({
  items,
  className,
}: {
  items: { name: string; email: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item: string, event: React.MouseEvent) => {
    event.stopPropagation();
    handleSelect(item);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "hover:bg-inherit flex items-center justify-between h-auto relative",
            className,
            selectedItems.length > 0 ? "items-start" : "items-center"
          )}
        >
          <div>
            {selectedItems.length >= 1 ? (
              <div className="w-full flex flex-wrap gap-2">
                {selectedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-muted py-1 px-2 rounded-lg"
                  >
                    <div className="flex items-center gap-1">
                      <div className="bg-muted rounded-full size-6 flex items-center justify-center border border-primary/10 ">
                        <span className="font-medium text-xs">
                          {item.split(" ").map((word) => word[0])}
                        </span>
                      </div>
                      <span>{item}</span>
                    </div>

                    <X
                      className="size-4 transition-all ease-in hover:scale-[1.2]"
                      onClick={(event) => handleRemoveItem(item, event)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <span>Search and select friends</span>
            )}
          </div>

          <ChevronDown
            className={cn(
              "size-4 flex-shrink-0",
              selectedItems.length > 0 ? "relative top-2" : ""
            )}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0" side="bottom">
        <Command className="w-full">
          <CommandInput placeholder="Search friends..." />

          <CommandList className="overflow-y-auto max-h-60">
            <CommandEmpty>No results found.</CommandEmpty>

            <ScrollArea className="h-60">
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
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default MultiSelect;
