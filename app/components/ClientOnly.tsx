import React from "react";

/**
 * ClientOnly renders its children only after the component is mounted on the client.
 * Helpful for components that rely on browser-only APIs or non-SSR friendly libs.
 */
export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}
