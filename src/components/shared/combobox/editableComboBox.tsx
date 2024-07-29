import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import React, { useCallback, useRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

type props = {
  items: any[];
  style?: any;
  field?: ControllerRenderProps<any, any>;
  onSelect?: any;
};

const EditableComboBox = ({ items, style, field, onSelect }: props) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = useCallback((item: any) => {
    setIsFocused(false);
    if (onSelect) {
      onSelect(item);
    }
  }, []);

  return (
    <div style={style} className="relative border rounded-md">
      <Command>
        <CommandInput
          ref={inputRef}
          className="h-10"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={field?.value}
        />
        <div
          className={
            isFocused
              ? "absolute block w-full max-h-40 top-full mt-1 border bg-white rounded-md overflow-x-hidden overflow-y-scroll shadow-lg"
              : "hidden"
          }
        >
          <CommandList>
            <CommandEmpty>No results</CommandEmpty>
            <CommandGroup>
              {items.map((item) => {
                return (
                  <CommandItem
                    key={item.id}
                    value={item.name}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                    onSelect={() => {
                      handleSelect(item);
                    }}
                  >
                    {item.name}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </div>
      </Command>
    </div>
  );
};

export default EditableComboBox;
