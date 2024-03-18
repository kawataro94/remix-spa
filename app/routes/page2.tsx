import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Page 2" }];
};

export default function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <Link to="/">Go to /</Link>
    </div>
  );
}
