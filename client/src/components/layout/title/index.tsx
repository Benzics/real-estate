import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { yariga, logo } from "assets";
export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Real estate" width="28px" />
        ) : (
          <img src={yariga} alt="Real estate" width="140px" />
        )}
      </Link>
    </Button>
  );
};
