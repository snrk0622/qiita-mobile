const INITIAL_STATE = {
  description: "Backend Developer at ROLO. I love PHP and I'm focusing on Laravel, Docker, GraphQL.",
  facebook_id: '100031281824274',
  followees_count: 160,
  followers_count: 795,
  github_login_name: 'ucan-lab',
  id: 'ucan-lab',
  items_count: 213,
  linkedin_id: '',
  location: 'Harajuku, Japan',
  name: '',
  organization: '株式会社ROLO',
  permanent_id: 52879,
  profile_image_url: 'https://qiita-image-store.s3.amazonaws.com/0/52879/profile-images/1540380605',
  team_only: false,
  twitter_screen_name: 'ucan_lab',
  website_url: 'https://u-can.pro',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
