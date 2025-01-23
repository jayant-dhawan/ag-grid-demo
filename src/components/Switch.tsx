import {
  Root,
  Thumb,
  SwitchProps as SwitchPropsRX,
} from "@radix-ui/react-switch";
import classes from "./Switch.module.css";
import { Flex } from "@radix-ui/themes";

type SwitchProps = SwitchPropsRX & {
  label: string;
};

export default function Switch({
  label,
  className = "",
  ...props
}: SwitchProps) {
  return (
    <Flex align="center" gap="2">
      <span className={classes.Label}>{label}</span>
      <Root {...props} className={classes.Root + className}>
        <Thumb className={classes.Thumb} />
      </Root>
    </Flex>
  );
}
