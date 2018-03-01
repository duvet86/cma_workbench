import React from "react";

import LoadingContainer from "common/LoadingContainer";

const withLoading = Component => {
  return ({ error, isLoading, ...props }) => {
    if (error || isLoading) {
      return <LoadingContainer error={error} isLoading={isLoading} />;
    }

    return <Component {...props} />;
  };
};

export default withLoading;
