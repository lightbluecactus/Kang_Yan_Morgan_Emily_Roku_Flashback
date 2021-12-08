import { getData } from "./components/TheDataMiner.js";
import TheDetail from "./components/TheDetailComp.js";

(()=>{
	const myVue = new Vue({
		el: "#app",

		created: function() {
			getData(null, (data) => this.projectsData = data);
		},

		data: {
			projectsData: [],
			message: "Linked to Vue!"
		},

		methods: {
			greeting() {
				console.log(message);
			}
		},

		components: {
			detail: TheDetail
		}
	})

})();