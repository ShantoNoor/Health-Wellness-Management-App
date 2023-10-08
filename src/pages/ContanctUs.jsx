const ContanctUs = () => {
  return (
    <div
      className="hero min-h-[80vh] mt-6 rounded-lg overflow-hidden"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/BgJgm0g/e3cd74fe-db63-4cd0-afc5-3f9cb27956a9.jpg)",
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message: </span>
                </label>
                <textarea
                  placeholder="type your message"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContanctUs;
