import "./Contact.css";

const Contact = () => {

  const whatsappNumber = "91XXXXXXXXXX";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const whatsappMessage = `
Hello SS Garments,

Name: ${name}
Phone: ${phone}

Requirement:
${message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <section id="contact" className="contact">

        <div className="contact__container">

          {/* Header */}
          <div className="contact__header">

            <span className="contact__eyebrow">
              Get In Touch
            </span>

            <h2 className="contact__title">
              Let's create something
              <span> together.</span>
            </h2>

            <p className="contact__description">
              Looking for school uniforms, children's wear, professional
              garments or customized costumes? Get in touch with us to
              discuss your requirements.
            </p>

          </div>


          <div className="contact__content">

            {/* Contact Information */}
            <div className="contact__info">

              <div className="contact__info-header">
                <h3>
                  Contact SS Garments
                </h3>

                <p>
                  We are happy to discuss your garment requirements and
                  provide a suitable solution based on your design,
                  quantity and specifications.
                </p>
              </div>


              <div className="contact__details">

                {/* Phone 1 */}
                <a
                  href="tel:+919XXXXXXXXX"
                  className="contact__detail"
                >
                  <div className="contact__icon">
                    <span>☎</span>
                  </div>

                  <div>
                    <span className="contact__detail-label">
                      Call Us
                    </span>

                    <strong>
                      +91 9900349620
                    </strong>
                  </div>
                </a>


                {/* Phone 2 */}
                <a
                  href="+918XXXXXXXXX"
                  className="contact__detail"
                >
                  <div className="contact__icon">
                    <span>☎</span>
                  </div>

                  <div>
                    <span className="contact__detail-label">
                      Alternate Number
                    </span>

                    <strong>
                      +91 8050090080
                    </strong>
                  </div>
                </a>


                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail"
                >
                  <div className="contact__icon">
                    <span>◉</span>
                  </div>

                  <div>
                    <span className="contact__detail-label">
                      WhatsApp
                    </span>

                    <strong>
                      Chat with us
                    </strong>
                  </div>
                </a>


                {/* Location */}
                <div className="contact__detail">

                  <div className="contact__icon">
                    <span>⌖</span>
                  </div>

                  <div>
                    <span className="contact__detail-label">
                      Location
                    </span>

                    <strong>
                      Bengaluru, Karnataka
                    </strong>
                  </div>

                </div>

              </div>


              {/* Bulk Order Notice */}
              <div className="contact__bulk">

                <strong>
                  Bulk Orders Only
                </strong>

                <p>
                  We specialize in bulk garment orders for schools,
                  institutions, organizations, events and other
                  requirements. Please contact us with your quantity
                  and design requirements.
                </p>

              </div>

            </div>


            {/* Enquiry Form */}
            <div className="contact__form-wrapper">

              <h3>
                Send an Enquiry
              </h3>

              <p>
                Tell us what you are looking for and we will get back
                to you.
              </p>


              <form
                className="contact__form"
                onSubmit={handleSubmit}
              >

                <div className="contact__form-row">

                  <div className="contact__field">
                    <label htmlFor="name">
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>


                  <div className="contact__field">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                </div>


                <div className="contact__field">

                  <label htmlFor="message">
                    Requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your garment requirement, quantity, design, etc."
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="contact__submit"
                >
                  Send Enquiry
                  <span>→</span>
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${+919900349620}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with SS Garments on WhatsApp"
      >

        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.82 9.82 0 01-1.505-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.892 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.821 11.821 0 00-3.478-8.416"
          />
        </svg>

      </a>
    </>
  );
};

export default Contact;