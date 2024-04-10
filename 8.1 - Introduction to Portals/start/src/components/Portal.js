import { createPortal } from "react-dom";

const Portal = ({ domNode, children }) => createPortal(domNode, children);
export default Portal;
