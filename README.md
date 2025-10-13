# OpenGraph Ninja React

This library contains the code you need to generate nice-looking previews of stand-alone links in your React application.

Read more at [opengraph.ninja](https://opengraph.ninja)

## Usage

This package contains two things:

- a React component for previewing URLs
- a React hook for getting the preview data

### Setup

First, install the package.

```sh
$ npm install @opengraphninja/react
# or
$ yarn add @opengraphninja/react
```

### Using the React component

Using the React component is pretty easy:

```tsx
import "@opengraphninja/react/styles.css";
import { PreviewLink } from "@opengraphninja/react";

export const App = () => {
  return <PreviewLink href="https://opengraph.ninja" />;
};
```

### Using the React hook

If you want to design your own preview, you can use the React hook `usePreviewData`:

```tsx
import { usePreviewData } from "@opengraphninja/react";

type Props = { href: string };
export const SimplePreview = (props: Props) => {
  const previewData = usePreviewData(props.href);
  if (previewData.status !== "success") {
    return <p>Loading…</p>;
  }
  return (
    <div>
      <h2>{previewData.data.title}</h2>
      <p>{previewData.data.description}</p>
    </div>
  );
};
```

### Usage without React

If you're not using React, you can use the [@opengraphninja/sdk](https://github.com/opengraphninja/sdk) package instead!


## Releasing

To release a new version, push a branch and create a changeset

## Questions and feature requests?

If you have questions, bug reports or feature requests, please let us know in the issues.
