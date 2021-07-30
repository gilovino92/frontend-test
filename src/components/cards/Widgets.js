export default {
  RecentTransactions: () =>
    import(/* webpackChunkName: "RecentTransactions" */ './RecentTransactions'),
  CardDetails: () =>
    import(/* webpackChunkName: "CardDetails" */ './CardDetails')
};
