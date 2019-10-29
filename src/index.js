// This is the entry file, which kicks off all rendering.
//
// We import h() here because that's the function our JSX elements transpile to.
import { render } from "react-dom";
import { h } from "preact";

render(<div>Hello</div>, document.getElementById("application-form"));
