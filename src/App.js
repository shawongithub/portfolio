import './App.css';
import Sidebar from './Components/sidebar'
import Introduction from './Components/introduction'
import About from './Components/about'
import Timeline from './Components/timeline'


function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Timeline />
        </div>
      </div>
    </div>

  );
}

export default App;
