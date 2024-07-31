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

type Item = { id: any; name: string };

type Props = {
  items: Item[];
  style?: any;
  field?: ControllerRenderProps<any, any>;
  onSelect?: any;
  onValueChange?: any;
};

const EditableComboBox = ({
  items,
  style,
  field,
  onSelect,
  onValueChange,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(field ? field.value : "");

  const handleSelect = useCallback(
    (item: Item) => {
      inputRef.current?.blur();
      setIsFocused(false);
      setInputValue(item.name);
      if (onSelect) {
        onSelect(item);
      }
    },
    [onSelect]
  );

  const handleValueChange = useCallback(
    (value: string) => {
      setInputValue(value);
      if (onValueChange) {
        onValueChange(value);
      }
    },
    [onValueChange]
  );

  return (
    <div style={style} className="relative border rounded-md">
      <Command>
        <CommandInput
          ref={inputRef}
          className="h-[calc(2.375rem)]"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={inputValue}
          onValueChange={(value) => {
            handleValueChange(value);
          }}
        />
        <div
          className={
            isFocused
              ? "absolute block w-full max-h-40 top-full mt-1 border bg-white rounded-md overflow-x-hidden overflow-y-scroll shadow-lg"
              : "hidden"
          }
        >
          <CommandList>
            <CommandEmpty>This is a brand new item</CommandEmpty>
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
