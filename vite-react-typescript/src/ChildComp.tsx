import { ReactNode } from "react";

interface ChildCompProps {
  message: string;
  children: ReactNode;
}

function ChildComp({message, children}: ChildCompProps) {
  return(
    <div>
      <h2>ChildComp</h2>
      <p>{message}</p>
      <div>{children}</div>
    </div>
  )
}

export default ChildComp