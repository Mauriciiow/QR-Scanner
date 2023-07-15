export interface ButtonProps {
  text: string;
  onPress: () => void;
  color?: string;
  Icon?: () => JSX.Element;
}
