import * as React from "react";
import * as api from "./api";

/** Returns metadata about the provided URL */
export const usePreviewData = (href: string) => {
  const [data, setData] = React.useState<api.PreviewData | null>(null);
  React.useEffect(() => {
    api.getData(href).then((data) => setData(data));
  }, [href]);
  return data;
};
