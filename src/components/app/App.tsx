import { Routes, Route } from "react-router-dom";
import Page from "../page/Page";
import News from "../news/News";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Page />}>
                <Route index element={<News />} />
            </Route>
        </Routes>
    );
}

export default App;
