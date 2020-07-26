import './materialize.min';
import '../css/materialize.min.css';
import '../css/style.scss';
import * as pages from "./pages";

const app = document.querySelector('.root');
app.append(pages.startPage());
const tabs = document.querySelector('.tabs');
M.Tabs.init(tabs);