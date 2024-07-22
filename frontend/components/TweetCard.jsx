import Image from "next/image";
const TweetCard = ({ tweets, handleLike }) => {
  return (
    <section>
      <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
        {tweets.map((tweet) => (
          <div key={tweet._id}>
            <div className="flex flex-col bg-white rounded-lg p-4 gap-2">
              <div className="flex flex-col gap-2">
                <h2 className="font-roboto-100 text-babyblue">@{tweet.username}</h2>
                <p className="font-roboto-100 ">{tweet.text}</p>
              </div>
              <div className="flex gap-3 font-roboto-100 text-gray-600 justify-end">
                <p>Likes</p>
                <p>{tweet.likes}</p>
                <button onClick={() => handleLike(tweet.id)}>
                  <Image src="/assets/icons/heart.png" width={12} height={12} alt="heart" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TweetCard;
