import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CommandLoading } from "cmdk";
import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ControllerRenderProps, UseFormSetValue } from "react-hook-form";

const FormComboboxEditable = ({
  field,
  items,
  setValue,
  onSelect
}: {
  field: ControllerRenderProps<any, any>;
  items: any[];
  setValue: UseFormSetValue<any>;
  onSelect?: () => void
}) => {
  const inputRef = useRef(null);
  const [selected, setSelected] = useState(field.value);
  const [isFocus, setFocus] = useState(false);

  const handleSelect = useCallback(
    (item: any) => {
      setSelected(item.name);
      setValue(field.name, item.name);
      setFocus(false);
      if(onSelect){
        onSelect();
      }
    },
    [field, setValue, onSelect]
  );

  const handleChangeValue = useCallback(
    (value: string) => {
      setSelected(value);
      setValue(field.name, value);
    },
    [field, setValue]
  );

  return (
    <div className="relative border">
      <Command>
        <CommandInput
          ref={inputRef}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={selected}
          onValueChange={(value) => handleChangeValue(value)}
        ></CommandInput>
        <div
          className={cn(
            "absolute top-full w-full bg-white max-h-36 overflow-y-scroll overflow-x-hidden",
            isFocus ? "block" : "hidden"
          )}
        >
          <CommandList>
            <CommandEmpty></CommandEmpty>
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

export default FormComboboxEditable;
