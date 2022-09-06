import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

*{
      margin:0;
      padding:0;
      box-sizing:border-box;
      overflow-x:hidden;
}
:root{
      font-size:24px;
      font-family: "Inter";
      font-style: normal;
      color:white;
}
`;

export default Global;
