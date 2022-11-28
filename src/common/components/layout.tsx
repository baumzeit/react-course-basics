import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex max-w-5xl gap-5 flex-wrap">{props.children}</div>
    </div>
  );
};
