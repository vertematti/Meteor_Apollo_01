export default {
  Query: {
    user(obj, args, { user }) {
      return user || {};
    }
  },
  User: {
    email: user => 'gersonlv@gmail.com'
  }
};
