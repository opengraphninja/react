import * as React from "react";
import { usePreviewData } from "./usePreviewData";

type PreviewLinkProps = {
  href?: string;
};
/** Creates a neat looking preview of a link
 *
 * Fetches the metadata of the site, and
 */
export const PreviewLink = ({ href }: PreviewLinkProps) => {
  const dataStatus = usePreviewData(href);
  if (dataStatus.status !== "success") {
    return null;
  }
  const { data } = dataStatus;
  return (
    <a className="ogn-container" href={href}>
      {data.image && (
        <img
          src={data.image.url}
          alt={data.image.alt || data.description}
          className="ogn-image"
        />
      )}
      <div className="ogn-content">
        <p className="ogn-title">{data.title}</p>
        <p className="ogn-description">{data.description}</p>
        <p className="ogn-url">{data.hostname}</p>
      </div>
    </a>
  );
};
