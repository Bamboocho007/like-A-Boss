import { Keyboard, TouchableWithoutFeedback } from "react-native";

export type DismissKeyboardProps = {
  children: React.JSX.Element;
};

export const DismissKeyboard = ({ children }: DismissKeyboardProps) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
