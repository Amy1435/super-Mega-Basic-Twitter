class Tweet {
  constructor(id, username, text) {
    this.id = id;
    this.username = username;
    this.text = text;
    this.likes = 0;
    this.createdAt = new Date();
  }
}

export default Tweet;
