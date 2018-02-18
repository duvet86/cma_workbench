import React from "react";

import Loading from "common/Loading";

const withLoading = Component => {
  return ({ error, isLoading, ...props }) => {
    if (error || isLoading) {
      return <Loading error={error} isLoading={isLoading} />;
    }

    return <Component {...props} />;
  };
};

export default withLoading;
