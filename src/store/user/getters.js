export default {
  getUserMobileNumber: state => {
    const coutnryCode = state.profile.mobile.countryCode
      ? `+${state.profile.mobile.countryCode} `
      : '';
    return `${coutnryCode}${state.profile.mobile.number}`;
  },
  getDateOfBirth: state => {
    if (!state.profile.dateOfBirth) return '';
    const date = new Date(state.profile.dateOfBirth);
    return date.toLocaleDateString();
  }
};
