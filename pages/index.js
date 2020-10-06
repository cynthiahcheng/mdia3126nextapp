import Header from '../comps/Header';
import Google from '../comps/Google';
import Divider from '../comps/Divider';
import Input from '../comps/Input';
import Buttons from '../comps/Buttons';
import Banner from '../comps/Banner';

export default function Home() {
  return (
    <div className="main">
      <div className="left-section">
        <img src="image5.png" />
        <div className="banner">
          <Banner />
        </div>
      </div>
      <div className="right-section">
        <Header />
        <Google />
        <Divider />
        <Input />
        <Buttons />
      </div>
    </div>
  )
}
