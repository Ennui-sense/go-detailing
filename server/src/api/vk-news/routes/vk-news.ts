export default {
  routes: [
    {
     method: 'GET',
     path: '/vk-news',
     handler: 'vk-news.getNews',
     config: {
       auth: false
     },
    },
  ],
};
