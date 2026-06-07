import './Services.css';

function Services() {
  const services = [
    {
      title: "Starter Website",
      description: "A one-page premium website designed for immediate credibility and capturing enquiries.",
      icon: "fa-rocket"
    },
    {
      title: "Business Website",
      description: "A 5-page website perfect for showcasing multiple services, your story, and building local authority.",
      icon: "fa-briefcase"
    },
    {
      title: "Monthly Care",
      description: "Ongoing support so you never have to worry about your website breaking or getting outdated.",
      icon: "fa-shield-halved"
    }
  ];

  return (
    <section className="sec" id="services">
      <div className="ct">
        <p className="ol rv v">Transparent Offers</p>
        <h2 className="sh2 rv v d1">Premium Services,<br />No Hidden Costs.</h2>
        <div className="sv-g rv v d2">
          {services.map((service, index) => (
            <div key={index} className="svc">
              <div className="svi"><i className={`fas ${service.icon}`}></i></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
