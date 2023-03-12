const sendRequest = async (entity, method = 'GET', config) => {
    return await fetch(`${entity}`, {
        method,
        ...config
    })
        .then((response) => {
            if (response.ok) {
                if (method === 'GET' || method === 'POST' || method === 'PUT') {
                    return response.json()
                }
                return response.json()
            }
        })
};

const API = 'http://localhost:5000/api/';
const root =  document.querySelector('#products');

const getProducts = () => sendRequest(`${API}products`);
const delProduct = (id) => sendRequest(`${API}product/${id}`, "DELETE")

getProducts()
	.then(({data}) => {

		console.log(data);
		data.map(product => {
			root.insertAdjacentHTML('beforeend', `
                <div class="card-box">
                    <div class="col card" data-id="${product.id}">
                        <div class="card-header">
                            <div class="btn_del" style=" position: absolute; top: 0; right: 0; background: #000; color: #fff; padding: 5px;">}{</div> 
                            <img src="${product.src}" class="card-img-top" alt="${product.title}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                       </div>
                    </div>
                </div>

        `)
		})
	})

    

document.addEventListener('click', async (e) => {
    if(e.target.classList.contains("btn_del")) {
        const id = e.target.closest('.card').dataset.id

        await delProduct(id);

        window.location.href = `http://localhost:5000/product`;
    }
})