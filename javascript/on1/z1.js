let order = {
	client_name: "",
	client_phone: "",
	order_name: "",
	order_price: "",
	order_status: ""
	
}

const all_orders = [
	{
		client_name: "Дмитро Іванов",
		client_phone: "+3809781240",
		order_name: "Iphone X",
		order_price: "520",
		order_status: true
	},
	{
		client_name: "Тетяня Микитенко",
		client_phone: "+3809646712",
		order_name: "Клавіатура",
		order_price: "60",
		order_status: false
	},
	{
		client_name: "Андірй Тарасенко",
		client_phone: "+3809641412",
		order_name: "Телефон Samsung",
		order_price: "360",
		order_status: true
	}
]

function addOrder(){
	order.client_name = document.getElementById(`client_name`).value;
	order.client_phone = document.getElementById(`client_phone`).value;
	order.order_name = document.getElementById(`order_name`).value;
	order.order_price = document.getElementById(`order_price`).value;
	order.order_status = document.getElementById(`order_status`).checked;
	
	console.log(order);
}