function InfoCard({ icon, title, description, index }) {
  return (
    <div className="info-card">
      <div className="icon" style={{ animationDelay: `${index * 0.5}s` }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default InfoCard;
