const request = require("superagent");

const root = "https://cook-example.herokuapp.com";

const tokenPlugin = req => {
  const token = window.localStorage.getItem("jwt");
  if (token) {
    req.set('authorization', `Bearer ${token}`);
  }
}

const Recipes = {
  all: () => request.get(`${root}/recipes`).then(res => res.body),
  get: id => request.get(`${root}/recipes/${id}`).then(res => res.body),
  create: recipe =>
    request
      .post(`${root}/recipes`)
      .query(recipe)
      .use(tokenPlugin)
      .then(res => res.body),
  stared: account =>
    request.get(`${root}/users/${account}/stars`).then(res => res.body),
  posted: account =>
    request.get(`${root}/users/${account}/recipes`).then(res => res.body)
};

const Profile = {
  get: account => request.get(`${root}/users/${account}`).then(res => res.body),
  edit: (account, profile) =>
    request
      .put(`${root}/users/${account}`)
      .query(profile)
      .then(res => res.body)
};

const Auth = {
  login: (account, password) =>
    request
      .post(`${root}/users/login`)
      .query({ account, password })
      .then(res => res.body)
};

export default {
  Recipes,
  Profile,
  Auth,
};
