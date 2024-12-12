// SectionContact.jsx
import ContactForm from "../components/ContactForm";

const SectionContact = () => {
  return (
    <section id="contact" className="contact py-5 bg-dark text-white">
      <div className="container">
        <h3 className="text-center mb-4">Contáctame</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default SectionContact;
