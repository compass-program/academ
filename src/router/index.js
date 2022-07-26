import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/PageAcadem';

import NotFound from '@/views/PageNotFound';

import { getApartments, getApartmentsOnTheFloor } from "@/api/academ";

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Academ',
		},

		beforeEnter(from, to, next) {
			getApartments();
			getApartmentsOnTheFloor(4);
			next();
		},
	},

	{
		path: '/404',
		name: '404',
		component: NotFound,
		meta: {
			title: '404',
		}
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
})

//* переход к странице с координатами x: 0, y: 0
router.beforeEach(() => {
	window.scrollTo(0, 0);
})

export default router