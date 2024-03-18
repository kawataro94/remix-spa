import type { MetaFunction } from "@remix-run/react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Page 1" }];
};

export default function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <Link to="/">Go to /</Link>
    </div>
  );
}
