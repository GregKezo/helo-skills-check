insert into users (
  username
  ,password
  ,profile_pic
)
values (
  ${username}
  ,${hash}
  ,${profile_pic}
)

returning id, username, profile_pic;