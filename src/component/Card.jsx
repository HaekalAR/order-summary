const Card = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[--pale-blue] bg-[url(/pattern-background-mobile.svg)] md:bg-[url(/pattern-background-desktop.svg)] bg-contain bg-no-repeat md:p-0 p-2">
      <div className="bg-[white] rounded-xl overflow-hidden md:w-[24em] max-h-[90%] w-80 ">
        <div>
          <img src="/illustration-hero.svg" alt="Header-Illustration" />
        </div>
        <div className="py-10 px-7 flex flex-col gap-4">
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-[--dark-blue] font-[900] md:text-2xl text-xl">
              Order Summary
            </h2>
            <p className="font-[500] md:text-[15px] text-[13px] text-[--desaturated-blue]">
              You can now listen to millions of songs, audiobooks, and podcasts,
              on any device anywhere you like!
            </p>
          </div>
          <div className="flex items-center justify-between bg-[--very-pale-blue] rounded-xl p-4">
            <div className="flex gap-4">
              <img src="/icon-music.svg" className="w-10 h-10" />
              <div>
                <h3 className="font-[700] md:text-base text-sm text-[--dark-blue]">
                  Annual Plan
                </h3>
                <p className="md:text-[15px] text-[13px] text-[--desaturated-blue] font-[500]">
                  $59.99/year
                </p>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="font-[700] md:text-md text-sm text-[--bright-blue] hover:text-[#988bf9] transition-all duration-300"
              >
                Change
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <button className="bg-[--bright-blue] text-[--very-pale-blue] py-3 rounded-lg font-[700] text-sm hover:bg-[#988bf9] transition-all duration-300 shadow-[--pale-blue] shadow-xl">
              Proceed to Payment
            </button>
            <button className="bg-transparent text-[--desaturated-blue] font-[800] text-sm hover:text-[--dark-blue] transition-all duration-300">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
