interface Props {
  name?: string;
}

export const DEFAULT_NAME = "Anonymous";

export default function Greeter({ name=DEFAULT_NAME }: Props) {
  return (
    <p>Hello {name}</p>
  );
}

