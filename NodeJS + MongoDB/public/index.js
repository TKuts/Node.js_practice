const sendRequest = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const API = "http://localhost:5000/api/";
const root = document.querySelector("#products");

const getProducts = () => sendRequest(`${API}products`);

getProducts().then(({ data }) => {
  console.log(data);
  data.map((product) => {
    root.insertAdjacentHTML(
      "beforeend",
      `
                <div class="card-box">
                    <div class="col card" data-id="${product._id}">
                        <div class="card-header">
                            <div class="btn_del" style=" position: absolute; top: 0; right: 0; background: #000; color: #fff; padding: 5px;">}{</div> 
                            <img src="${product.src}" class="card-img-top" alt="${product.title}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                       </div>
                    </div>
                </div>

        `
    );
  });
});
