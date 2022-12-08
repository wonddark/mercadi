function RowOfferPlaceholder() {
  return (
    <div className="card card-body my-1" style={{ cursor: "pointer" }}>
      <div className="row justify-content-around placeholder-glow placeholder-lg">
        <div className="col-2 placeholder" />
        <div className="col-2 placeholder" />
        <div className="col-2 placeholder" />
        <div className="col-2 placeholder" />
        <div className="col-2 placeholder" />
      </div>
    </div>
  );
}

export default RowOfferPlaceholder;
