import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";

export default function FormSelect<T extends FieldValues>({
  form,
  name,
  label,
  selectItem,
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  selectItem: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
}) {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>

          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger
              id={field.name}
              aria-invalid={fieldState.invalid}
              className={cn("w-full")}
            >
              <SelectValue placeholder={`Select ${label}`} />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>

                {selectItem.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    className="capitalize"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
