import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  AlertCircleIcon,
  FormControlErrorText,
} from "@gluestack-ui/themed";
import { ForwardedRef, forwardRef } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type LbInputProps = {
  disabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  label?: string;
  type?: "password" | "text";
  value?: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange: (e: string) => void;
  style?: StyleProp<ViewStyle>;
};

export const LbInput = forwardRef(function (
  {
    disabled,
    isInvalid,
    isReadOnly,
    isRequired,
    label,
    type = "text",
    value,
    placeholder,
    helperText,
    errorText,
    onBlur,
    onFocus,
    onChange,
    style,
  }: LbInputProps,
  ref: ForwardedRef<any>
): React.JSX.Element {
  return (
    <FormControl
      style={style}
      width="$full"
      size="md"
      isDisabled={disabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      ref={ref}
    >
      {label && (
        <FormControlLabel mb="$1">
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
      )}

      <Input>
        <InputField
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={(e) => onChange(e.nativeEvent.text)}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </Input>
      {helperText && (
        <FormControlHelper>
          <FormControlHelperText>{helperText}</FormControlHelperText>
        </FormControlHelper>
      )}

      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{errorText}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
});
