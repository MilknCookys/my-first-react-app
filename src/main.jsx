import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FunctionalInput from "./FunctionalInput";
import ClassInput from "./ClassComponent";
import ClassCount from "./ClassCount";
import "../src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FunctionalInput name="Functional component!" />
    <div className="divider" />
    <ClassInput name="Class based component!" />
  </StrictMode>
);
