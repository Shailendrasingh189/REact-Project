export default function Alert({ alert }) {
  // console.log(alert);
  const capitalize = (word) => {
    // const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong> {alert.msg}
        </div>
      )}
    </div>
  );
}
