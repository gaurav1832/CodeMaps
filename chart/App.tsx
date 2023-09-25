import Flow from "./Flow";
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
export default function Chart() {
  return (
    
    <ChakraProvider> 
 
    <div className="parent">
      <div className="child"><Flow /></div>
         
     </div>
     </ChakraProvider>
  );
}
