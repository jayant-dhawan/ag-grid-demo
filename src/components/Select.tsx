import {
  Root,
  Trigger,
  Content,
  Item,
  Value,
  Icon,
  SelectProps as SelectPropsRX,
} from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/themes";
import classes from "./Select.module.css";

type SelectProps = Omit<SelectPropsRX, "children"> & {
  items: Array<{
    label: string;
    value: string;
  }>;
};

export default function Select({ items, ...props }: SelectProps) {
  return (
    <Root {...props}>
      <Trigger className={classes.Trigger} aria-label="Select Group Order">
        <Value placeholder="Select group">{props.value}</Value>
        <Icon className={classes.Icon}>
          <ChevronDownIcon />
        </Icon>
      </Trigger>
      <Content className={classes.Content}>
        {items.map((item) => (
          <Item value={item.value} key={item.value} className={classes.Item}>
            {item.label}
          </Item>
        ))}
      </Content>
    </Root>
  );
}
