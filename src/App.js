import {Title,Greeting} from './Title'

import NavLinks from './NavLinks';
import SearchTextbox from './SearchTextbox';
import SubmitButton from './SubmitButton';
import './App.css';

function App() {
  return(
  
  <header>
  <Title/>
  <nav>
    <NavLinks/>
    <form>
    <SearchTextbox/>
    <SubmitButton/>
    </form>
</nav>
<section>
  <Greeting/>



</section>



</header>









  );
}

export default App;
