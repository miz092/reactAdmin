import {
  Admin,
  defaultTheme,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { VisitorEdit } from "./component/form";
import { PostFilterSidebar } from "./component/FilterBar";
const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode:'dark',  } };

export const App = () => <Admin dataProvider={dataProvider}   theme={lightTheme}
>
  <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
  <Resource name="comments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
  <Resource name="users" list={ListGuesser} edit={VisitorEdit} show={ShowGuesser} />

</Admin>;
