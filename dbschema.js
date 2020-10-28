let db = {
  users: [
    {
      userId: "ixla3jg3pIeT4B2uthHFZFlVZUI2",
      email: "user@gmail.com",
      handle: "user",
      createdAt: "2020-10-25T17:22:04.404Z",
      imageUrl: "image/jhsadhshdj/ksjfhjhsa",
      bio: "Hello, saya anggiat benget selamat datang di bio saya",
      website: "https://user.com",
      location: "Indonesia, IDN",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "ini adalah bisi dari body scream",
      createdAt: "2020-10-25T16:14:29.652Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "dsfadfaewwegg",
      body: "Nice one mate",
      createdAt: "2020-10-25T16:14:29.652Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "jhon",
      read: "true | false",
      type: "like | comment",
      createdAt: "2020-10-25T16:14:29.652Z",
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "ixla3jg3pIeT4B2uthHFZFlVZUI2",
    email: "user@gmail.com",
    handle: "user",
    createdAt: "2020-10-25T17:22:04.404Z",
    imageUrl: "image/jhsadhshdj/ksjfhjhsa",
    bio: "Hello, saya user selamat datang di bio saya",
    website: "https://user.com",
    location: "Indonesia, IDN",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "DeYRbXacN7Jr3llZsh0k",
    },
    {
      userHandle: "user",
      screamId: "EoLgIzWryYPH4B8YgKAb",
    },
  ],
};
