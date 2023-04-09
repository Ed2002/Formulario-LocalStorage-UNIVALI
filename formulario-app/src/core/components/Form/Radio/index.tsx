import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";
import { useField } from "@unform/core";
import { ReactElement, useEffect, useRef } from "react";

export type RadioInputType = {
    label:string,
    value:any
}

interface Props {
    name: string
    label: string
    elements: Array<RadioInputType>
}

type InputRadioProps = RadioGroupProps & Props;

export const RadioInput = ({name,label,elements,...rest}:InputRadioProps) => {
    const InputRef = useRef<HTMLInputElement[]>([]);
    const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: InputRef.current,
            getValue: refs => {
                console.log();
                const checked = refs.find((ref: { checked: any; }) => ref.checked);
                return checked ? checked.value : null;
            },
            setValue: (refs, value) => {
                const item = refs.find((ref: { value: any; }) => ref.value === value);
                if (item) {
                    item.checked = true;
                }
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])

    return (
        <FormControl>
            <FormLabel id={`idLabel-${name}`}>{label}</FormLabel>
            <RadioGroup
                aria-label={`idLabel-${name}`}
                name={name}
                {...rest}
            >
                {elements.map(({label,value},index) => (
                    <FormControlLabel
                        key={label}
                        value={value}
                        control={<Radio inputRef={er => (InputRef.current[index] = er)}/>}
                        label={label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}