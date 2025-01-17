const Section = ({ id, title, children }) => (
    <section id={id} className="min-h-screen p-8 bg-white">
      <h2 className="text-4xl font-bold text-black-600 mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
  
  export default Section;
  