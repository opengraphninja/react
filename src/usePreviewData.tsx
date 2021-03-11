import * as React from "react";
import * as api from "./api";

export type PreviewDataState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; data: api.PreviewData };

/** Returns metadata about the provided URL */
export const usePreviewData = (href: string | null | undefined) => {
  const [state, setState] = React.useState<PreviewDataState>({
    status: "idle",
  });
  React.useEffect(() => {
    if (!href) {
      setState({ status: "idle" });
      return;
    }
    setState({ status: "loading" });
    api
      .getPreviewData(href)
      .then((data) => setState({ status: "success", data }))
      .catch((e) => setState({ status: "error", error: e.error || e.message }));
  }, [href]);
  return state;
};
