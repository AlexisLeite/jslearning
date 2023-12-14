export const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
