import { createRouter, createWebHistory } from 'vue-router';
import WelcomeScreen from '../pages/WelcomeScreen.vue';
import UsersList from '../pages/UsersList.vue';
import Second_quiz from '../pages/Second_quiz.vue';
import Third_quiz from '../pages/Third_quiz.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: WelcomeScreen },
      { path: '/users', component: UsersList },
      { path: '/sure', component: Second_quiz },
      { path: '/more', component: Third_quiz },
    ],
  });

export default router;