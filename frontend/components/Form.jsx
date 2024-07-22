const Form = ({ tweet, setTweet, submitting, handleSubmit }) => {
  return (
    <section className=" w-full min-h-[90vh] flex items-center justify-center p-8">
      <div className="flex flex-col gap-6">
        <div className="text-white flex flex-col items-center text-center gap-4">
          <h1 className="font-outfit font-semibold text-4xl capitalize text-white sm:font-bold sm:text-4xl md:text-6xl lg:text-7xl">
            Crea un Tweet
          </h1>
          <p className="text-white font-roboto-100 md:text-lg lg:text-xl">Condividi con tutti i tuoi pensieri.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-5 rounded-lg">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-outfit">User Name*</label>
              <input
                placeholder="Write your username"
                value={tweet.username}
                required
                onChange={(e) => setTweet({ ...tweet, username: e.target.value })}
                className="border rounded-md p-2"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-outfit">Tweet*</label>
              <textarea
                value={tweet.tweet}
                placeholder="Write here your tweet"
                onChange={(e) => setTweet({ ...tweet, text: e.target.value })}
                required
                className="border rounded-md p-2"
              ></textarea>
            </div>
          </div>
          <button
            className="bg-green uppercase p-2 rounded-lg bg-babyblue tracking-[0.12em] font-outfit text-white md:p-4 "
            type="submit"
            disabled={submitting}
          >
            {submitting ? `Creating...` : `Create`}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
