import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Heading } from "@gluestack-ui/themed";
import { LbInput } from "../uikit/input/LbInput";
import { DismissKeyboard } from "../common/helpers/DismissKeyboard";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LbButton } from "../uikit/button/LbButton";
import { StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EMAIL_PATTERN } from "../common/validations/constants";

type LoginForm = {
  email: string;
  password: string;
};

type RootStackParamList = {
  index: undefined;
  "(tabs)": undefined;
};

export default function RootScreen() {
  const insets = useSafeAreaInsets();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigation =
    useNavigation<
      NativeStackScreenProps<RootStackParamList, "index">["navigation"]
    >();

  const submitForm: SubmitHandler<LoginForm> = (form) => {
    navigation.navigate("(tabs)");
  };

  return (
    <DismissKeyboard>
      <Box
        style={{
          flex: 1,
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <Box style={styles.container}>
          <Heading size="2xl">Login</Heading>
          <Box width="100%" justifyContent="center" alignItems="center">
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                pattern: EMAIL_PATTERN,
              }}
              render={({ field: { disabled, value, onBlur, onChange } }) => (
                <LbInput
                  placeholder="Email"
                  label="Email"
                  isRequired
                  isInvalid={!!errors.email}
                  errorText="Email invalid"
                  disabled={disabled}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
                minLength: 3,
              }}
              render={({ field: { disabled, value, onBlur, onChange } }) => (
                <LbInput
                  style={styles.input}
                  type="password"
                  placeholder="Password"
                  label="Password"
                  isRequired
                  isInvalid={!!errors.password}
                  errorText="Password invalid"
                  disabled={disabled}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <LbButton
            text="Login"
            onPress={handleSubmit(submitForm)}
            style={styles.submitBtn}
          />
        </Box>
      </Box>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    marginTop: 20,
  },
  submitBtn: {
    width: "100%",
  },
});
