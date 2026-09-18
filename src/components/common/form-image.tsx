import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileImage } from "lucide-react";
import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";
import { getImageData } from "@/lib/utils";
import { Preview } from "@/types/general";

export default function FormImage<T extends FieldValues>({
  form,
  name,
  label,
  preview,
  setPreview,
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  preview?: Preview;
  setPreview?: (preview: Preview) => void;
}) {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, ...rest }, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>

          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9 rounded-lg">
              <AvatarImage
                src={preview?.displayUrl}
                alt="preview"
                className="object-cover"
              />

              <AvatarFallback className="rounded-lg">
                <FileImage className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>

            <Input
              type="file"
              id={name}
              name={rest.name}
              ref={rest.ref}
              onBlur={rest.onBlur}
              disabled={rest.disabled}
              aria-invalid={fieldState.invalid}
              onChange={async (event) => {
                const { file, displayUrl } = getImageData(event);

                onChange(file ?? "");

                if (file) {
                  setPreview?.({
                    file,
                    displayUrl,
                  });
                }
              }}
            />
          </div>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
