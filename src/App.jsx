import Header from './header';
import Section from './section';
import Gallery from './Tempgallery';

const App = () => (
  <div className="bg-white text-black-600">
    <Header />
    <main className="pt-20">
      <Section id="about-us" title="About Us">Information about the company.</Section>
      <Section id="books" title="Books">Details about books.</Section>
      <Section id="workshops" title="Workshops">Details about workshops.</Section>
      <Gallery />
      <Section id="lets-collaborate" title="Lets Collaborate">Collaboration details.</Section>
      <Section id="shop" title="Shop">Shop-related details.</Section>
      <Section id="contact" title="Contact">Contact details.</Section>
    </main>
  </div>
);

export default App;
