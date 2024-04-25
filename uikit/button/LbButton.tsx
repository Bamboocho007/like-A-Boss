import { Button, ButtonText } from "@gluestack-ui/themed";
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleProp,
  TargetedEvent,
  ViewStyle,
} from "react-native";
import { RefCallBack } from "react-hook-form";

export type LbButton = {
  text: string;
  disabled?: boolean;
  variant?: "outline" | "solid" | "link";
  onPress?: (event: GestureResponderEvent) => void;
  onFocus?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  ref?: RefCallBack;
  style?: StyleProp<ViewStyle>;
};

export function LbButton({
  text,
  disabled = false,
  variant = "solid",
  onPress,
  onFocus,
  onBlur,
  ref,
  style,
}: LbButton): React.JSX.Element {
  return (
    <Button
      size="md"
      variant={variant}
      action="primary"
      isDisabled={disabled}
      isFocusVisible={false}
      onPress={onPress}
      ref={ref}
      style={style}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
