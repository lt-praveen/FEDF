function Services() {

  const handleService = (service) => {
    alert(`${service} service selected.`);
  };

  return (
    <section className="services">

      <div
        className="card"
        onClick={() => handleService("Pahani Search")}
      >
        <h3>Pahani Search</h3>
        <p>Search land records using survey number.</p>
      </div>

      <div
        className="card"
        onClick={() => handleService("Mutation Request")}
      >
        <h3>Mutation Request</h3>
        <p>Apply for ownership transfer online.</p>
      </div>

      <div
        className="card"
        onClick={() => handleService("EC Application")}
      >
        <h3>EC Application</h3>
        <p>Apply for encumbrance certificate.</p>
      </div>

      <div
        className="card"
        onClick={() => handleService("Status Tracking")}
      >
        <h3>Status Tracking</h3>
        <p>Track all submitted applications.</p>
      </div>

    </section>
  );
}

export default Services;