import { IconError } from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'error':
      return <IconError />;
    default:
      return null;
  }
};

export default Icon;
