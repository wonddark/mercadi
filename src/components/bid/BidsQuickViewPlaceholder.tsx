function BidsQuickViewPlaceholder() {
  return (
    <div className="card card-body my-2">
      <div className="container-fluid p-0">
        <div className="row justify-content-between placeholder-glow">
          <div className="col-10 placeholder" style={{ minHeight: 10 }} />
          <div className="col-8 placeholder mt-1" style={{ minHeight: 10 }} />
        </div>
      </div>
    </div>
  );
}

export default BidsQuickViewPlaceholder;
