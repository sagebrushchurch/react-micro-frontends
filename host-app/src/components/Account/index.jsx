import React, { useEffect } from "react";
import { useTheme } from "@material-ui/core";

import useMicrofrontend from "../../hooks/useMicrofrontend";
import config from "../../utils/config";
import Error from "../Error";

const Account = () => {
  const id = "mfAccount";
  const theme = useTheme();
  const { isLoaded, mfAccount } = useMicrofrontend(id, config.mfAccountUrl);

  useEffect(() => {
    if (!mfAccount) return;
    const { render, unMount } = mfAccount;
    render(id, { theme });

    return () => unMount(id);
  }, [isLoaded]); // eslint-disable-line

  if (!isLoaded) return null;
  if (!mfAccount)
    return <Error message="Account microfrontend is not available" />;

  return <div id={id} />;
};

export default Account;
